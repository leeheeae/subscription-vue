<template>
  <li class="apt-list-item" v-for="(item, index) in aptListItem" :key="index">
    <div class="item-main-info">
      <div class="classification">{{ item.houseDtlSecdNm }}</div>
      <div class="area">{{ `[${item.sido}]` }}</div>
      <div class="house-name">{{ item.houseNm }}</div>
    </div>
    <div class="item-sub-info">
      <div>
        <h3>시공사</h3>
        <p>{{ item.bsnsMbyNm }}</p>
      </div>
      <div>
        <h3>모집공고일</h3>
        <p>{{ item.rcritPblancDe }}</p>
      </div>
      <div>
        <h3>청약기간</h3>
        <p>{{ `${item.rceptBgnde} ~ ${item.rceptEndde}` }}</p>
      </div>
      <div>
        <h3>당첨자발표</h3>
        <p>{{ item.przwnerPresnatnDe }}</p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    aptListItem: Array
  }
}
</script>

<style scoped>
.apt-list-item {
  width: 100%;
  margin: 1rem 0;
  border-radius: 4px;
  box-shadow: 0 3px 16px rgba(139, 154, 190, 22%);
}
.apt-list-item > div {
  padding: 10px 16px;
}
.apt-list-item .item-main-info {
  display: flex;
  align-items: center;
}
.apt-list-item .item-main-info .classification {
  width: 52px;
  height: 28px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 28px;
}
.apt-list-item .item-main-info .classification.privately {
  color: #002e91;
  background: #dff4ff;
}
.apt-list-item .item-main-info .classification.subject {
  color: #cf3a0b;
  background: #ffe2df;
}
.apt-list-item .item-main-info .area {
  margin: 0 6px;
  font-size: 14px;
  font-weight: 400;
  color: #5f86db;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.apt-list-item .item-main-info .house-name {
  font-size: 16px;
  font-weight: 500;
  color: #011030;
}

.apt-list-item .item-sub-info {
  border-top: 1px solid #e2e2e2;
}
.apt-list-item .item-sub-info > div:first-child {
  margin-top: 6px;
}
.apt-list-item .item-sub-info > div {
  display: flex;
  margin: 14px 0;
}
.apt-list-item .item-sub-info h3 {
  width: 84px;
  margin-right: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #011030;
  border-right: 1px solid #e2e2e2;
}
.apt-list-item .item-sub-info p {
  font-size: 15px;
  font-weight: 400;
  color: #011030;
}
</style>