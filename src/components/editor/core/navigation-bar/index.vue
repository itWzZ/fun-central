<template>
  <div class=" px-3 flex justify-center ">
    <!--    <div class="flex w-full justify-center">-->
    <!--      <svg t="1657183230699" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2415" width="35"-->
    <!--           height="35">-->
    <!--        <path-->
    <!--            d="M950.6 992H271.3c-18.7 0-33.4-14.7-33.4-33.5V755c-8 5.4-17.4 9.4-26.7 12.1h-1.3c-12 4-25.4 5.4-37.4 5.4C98.8 772.4 40 712.2 40 639.9c0-73.6 60.2-132.6 132.4-132.6 13.4 0 26.7 2.7 40.1 6.7 1.3 0 2.7 1.3 4 1.3 6.7 2.7 13.4 5.4 18.7 8l2.7 1.3V278.4c0-18.7 14.7-33.5 33.4-33.5h217.9l-4-8c-6.7-10.7-12-21.4-14.7-33.5V202c-4-12.1-5.3-25.4-5.3-37.5C465.2 90.9 525.4 32 597.6 32 671.1 32 730 92.3 730 164.6c0 13.4-2.7 26.8-6.7 40.2 0 1.3-1.3 2.7-1.3 4-2.7 6.7-5.3 13.4-8 18.7l-6.7 16.1h243.4c18.7 0 33.4 14.7 33.4 33.5V577c0 10.7-5.3 21.4-14.7 28.1-9.4 6.7-21.4 6.7-32.1 2.7l-57.5-25.4c-1.3 0-1.3-1.3-2.7-1.3-2.7-1.3-6.7-4-10.7-5.4H865c-6.7-2.7-13.4-2.7-20.1-2.7-36.1 0-65.5 29.5-65.5 65.6 0 36.2 29.4 65.6 65.5 65.6 6.7 0 13.4-1.3 18.7-2.7 6.7-1.3 12-5.4 17.4-8 1.3-1.3 2.7-1.3 4-2.7l50.8-24.1c10.7-5.4 22.7-4 32.1 1.3s16 17.4 16 28.1v262.4c0.1 18.8-14.6 33.5-33.3 33.5z m-645.9-66.9h612.4V751h-1.3c-10.7 6.7-21.4 12.1-33.4 16.1H881c-12 4-25.4 5.4-37.4 5.4-73.5 0-132.4-60.3-132.4-132.6 0-73.6 60.2-132.6 132.4-132.6 13.4 0 26.7 2.7 40.1 6.7 1.3 0 2.7 1.3 4 1.3 6.7 2.7 13.4 5.4 18.7 8l9.4 4V313.2H655.1c-10.7 0-21.4-5.4-28.1-14.7-6.7-9.4-6.7-21.4-2.7-32.1l28.1-64.3c0-1.3 1.3-1.3 1.3-2.7 1.3-2.7 4-6.7 5.3-10.7v-1.3c2.7-6.7 2.7-13.4 2.7-20.1 0-36.2-29.4-65.6-65.5-65.6s-65.5 29.5-65.5 65.6c0 6.7 1.3 13.4 2.7 18.7 1.3 6.7 5.3 12.1 8 17.4 1.3 1.3 1.3 2.7 2.7 4l26.7 57.6c5.3 10.7 4 22.8-1.3 32.1-5.3 9.4-17.4 16.1-28.1 16.1H304.7v262.4c0 10.7-5.3 21.4-14.7 28.1s-21.4 6.7-32.1 2.7l-50.8-22.8c-1.3 0-1.3-1.3-2.7-1.3-2.7-1.3-6.7-4-10.7-5.4h-1.3c-6.7-2.7-13.4-2.7-20.1-2.7-36.1 0-65.5 29.5-65.5 65.6 0 36.2 29.4 65.6 65.5 65.6 6.7 0 13.4-1.3 18.7-2.7 6.7-1.3 12-5.4 17.4-8 1.3-1.3 2.7-1.3 4-2.7l44.1-21.4c10.7-5.4 22.7-4 32.1 1.3 9.4 6.7 16 17.4 16 28.1v225.1h0.1z"-->
    <!--            p-id="2416" fill="#515151"></path>-->
    <!--      </svg>-->
    <!--      <span class="text-lg font-semibold flex items-center ml-3">组件</span>-->
    <!--    </div>-->
    <div class="w-full element-box  xl:flex-row flex-col" @dragstart="handleDragStart">
      <a-button class="cursor-move flex justify-center items-center m-2 xl:w-24 w-36 xl:h-12 h-20" @dblclick="handleDblClick(item.label)" v-for="(item,index) in list" :draggable="true"
                :data-index="index"
                :key="index">{{ item.label }}
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {list} from "@/components/components-list"
import {useProductStore} from "@/store/editor";
import {Element} from "@/store/editor/state/element";

const store = useProductStore()
const handleDragStart = (e: any) => {
  e.dataTransfer.setData('index', e.target.dataset.index)
}
const handleDblClick = (type: string) => {
  // store.actAddElement(new Element({
  //   title: type, name: type, style: {x: 550, y: 200, width: 200, height: 100}
  // }))
}
</script>

<style scoped lang="scss">
.element-box {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;

  > button {
    font-size: 0.875rem;
    //width: 6.25rem;
    //height: 3.125rem;
  }
}

</style>