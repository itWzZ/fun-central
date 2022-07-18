<template>
  <div class="flex items-center flex-col justify-between" style="height: 76vh">
    <div class="w-full space-y-4 ">
      <transition-group name="fade-slide">
        <div v-for="(item,index) in arrPage "
             @click="handleChangePage(item.id,index,item.name)"
             :key="item"
             class="page-idx flex items-center cursor-pointer border-b border-gray-200 transition-all rounded pl-3 h-16 "
             :class="{'text-blue-500 current-box':activePageId===item.id,'hover:text-blue-500':activePageId!==item.id}">

          <div class="w-full h-full flex items-center" style="font-size: 15px;">
            <div class="serial"><span>{{ index + 1 }}</span></div>
            <span class="text-sm text-left ml-4 w-48 text-ellipsis overflow-hidden break-words whitespace-nowrap">{{ item.name }}</span>
            <edit-outlined @click.stop="handleOpenModal(item.id,item.name)" class="ml-3 text-black hidden editor-icon"/>
          </div>
          <a-popconfirm
              title="确定删除此页面?"
              ok-text="确定"
              cancel-text="取消"
              @confirm="handleDeletePage(item.id,$event)"
          >
            <div style="transform: translateX(-60px)" class="flex item-center  cursor-pointer hover:text-red-600 text-black"
                 v-show="store.product.children.length!==1" @click="(e) => {
                e.stopPropagation()
              }">
              <rest-outlined/>
            </div>
          </a-popconfirm>
        </div>

      </transition-group>
    </div>
    <div>
      <a-button type="primary" class="w-36" @click="handleClickAddPage">新增页面</a-button>
    </div>
  </div>
  <a-modal v-model:visible="visible" title="页面重命名" @ok="handleOk">
   <span class="mr-1">页面标题：</span> <a-input  class="w-4/5" v-model:value="pageTitle.pageName" :maxlength="30" placeholder="请输入页面名称"/>
  </a-modal>
</template>

<script setup lang="ts">

import {useProductStore} from '@/store/editor'
import {Page} from "@/store/editor/state/page";
import {computed, reactive, ref} from "vue";
import {RestOutlined, EditOutlined} from "@ant-design/icons-vue"
import {message} from 'ant-design-vue';

const arrPage = computed(() => {
  return store.product.children
})
const activePageId = computed(() => {
  return store.activeState.active_page_id
})
const store = useProductStore()
const handleClickAddPage = () => {
  if ((store.product.children?.length as number) > 5) {
    message.warning("页面数量不超过6个！");
    return
  }
  store.actAddPage(new Page({name: `新页面`}))
}
const handleDeletePage = (id: string, e: any) => {
  store.actDeletePage(id)
  message.success('删除页面成功！')
}
const handleChangePage = (id: string, idx: number,name:string) => {
  store.actChangeActivePageId(id)
  message.success(`切换到${name}页面`)
}
const visible = ref(false)
const pageTitle = reactive({id: '', pageName: ''})
const handleOpenModal = (id: string, name: string) => {
  pageTitle.id = id
  pageTitle.pageName = name
  visible.value = true
}
const handleOk = () => {
  store.actSetPage({id: pageTitle.id, name: pageTitle.pageName})
  visible.value=false
}
</script>

<style scoped lang="scss">
.page-idx {
  .serial {
    width: 25px;
    border-radius: 50%;
    border: 1px solid #999999;

    span {
      color: #999999;
    }
  }

  &:hover .editor-icon {
    display: block;
  }
}

.current-box {
  .serial {
    border-color: #3b82f6;

    > span {
      color: #3b82f6;
    }
  }
}

/* router view transition fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  transform: translateX(-40px);
}

.fade-slide-leave-to {
  transform: translateX(-30px);
}
</style>