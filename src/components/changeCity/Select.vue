<template>
  <div
    :class="['choose-wrap', disabled ? 'disabled':'']"
    @click="showWrapper"
    v-docum-click="documentClick"
  >
    <span>{{value}}</span>
    <i class="el-icon-caret-bottom"></i>
    <div :class="{'mt-content':true, 'active': showWrapperActive}">
      <p>{{title}}</p>
      <div :class="['wrapper', className]">
        <div
          class="area"
          v-for="(listData, index) in renderList"
          :key="index"
        >
          <span
            :class="{'mt-item': true, 'active': item.name == value}"
            v-for="(item, index) in listData"
            :key="index"
            @click="changeValue(item)"
          >
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "list",
    "value",
    "showWrapperActive",
    "disabled",
    "className",
  ],
  data() {
    return {};
  },
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      if (!this.disabled) {
        this.$emit("change_active", true);
      }
    },
    documentClick() {
      this.$emit("change_active", false);
    },
    changeValue(item) {
      this.$emit("change", item);
    },
  },
  computed: {
    renderList: function () {
      let col = Math.ceil(this.list.length / 12);
      let resultList = [];
      for (var i = 0; i < col; i++) {
        resultList.push(this.list.slice(i * 12, i * 12 + 12));
      }
      return resultList;
    },
  },
};
</script>

<style lang="less" scoped>
.choose-wrap {
  width: 150px;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 10px 0px 10px 10px;
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 4px;
  color: #666;
  display: inline-block;
  cursor: pointer;
  line-height: 20px;
  position: relative;
  margin-left: 20px;

  &.disabled {
    cursor: not-allowed;
  }

  i {
    position: absolute;
    right: 8px;
    font-size: 10px;
    color: #666;
    top: 13px;
  }

  .mt-content {
    position: absolute;
    min-width: 150px;
    height: 375px;
    border: 1px solid #e5e5e5;
    top: 45px;
    left: 0px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 0 0px 15px;
    cursor: default;
    box-sizing: border-box;
    display: none;

    &.active {
      display: block;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 8px;
      height: 8px;
      top: -5px;
      left: 26px;
      background-color: #fff;
      border-top: 1px solid #e5e5e5;
      border-right: 1px solid #e5e5e5;
      transform: rotate(-45deg);
    }

    p {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 11px;
    }

    .wrapper {
      display: table-row;

      .area {
        display: table-cell;

        .mt-item {
          height: 20px;
          min-width: 40px;
          display: table;
          padding: 0px 8px;
          margin: 6px 38px 6px 0;
          font-size: 12px;
          box-sizing: border-box;
          white-space: nowrap;
          color: #666;
          border-radius: 10px;
          cursor: pointer;
        }
      }

      &.province {
        .mt-item {
          &:hover {
            background-color: #f4f4f4;
          }

          &.active {
            background: linear-gradient(to bottom right, #ffd000, #ffbd00);
          }
        }
      }

      &.city {
        .mt-item:hover {
          color: #222;
        }
      }
    }
  }
}
</style>