<template>
  <div class="courseChoice">
    <div class="info">
      <span>学号：{{studentID}}</span>
      <span>姓名：{{username}}</span>
    </div>
    <!-- 所有待选课程 -->
    <div class="main">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        @selection-change="handleSelectionChange"
        :header-cell-style="{background:'#c7cebd',color:'#606266'}"
      >
        <el-table-column type="index" width="50" align="center"></el-table-column>
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column label="课程号" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="课程" width="120" align="center"></el-table-column>
        <el-table-column prop="category" label="类别" width="120" align="center"></el-table-column>
        <el-table-column prop="credit" label="学分" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column prop="time" label="上课时间" width="150" align="center"></el-table-column>
        <el-table-column prop="address" label="上课地点" width="120" align="center"></el-table-column>
        <el-table-column prop="teacher" label="任课老师" width="120" align="center"></el-table-column>
      </el-table>
    </div>
    <el-button type="primary" @click="open">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        }
      ],
      multipleSelection: [],
      studentID: "08070116215",
      username: "小鱼河中游"
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    open() {
      this.$confirm("此操作将提交选项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交"
          });
        });
    }
  }
};
</script>

<style scoped>
/* .courseChoice {
  width: 80%;
  box-shadow: 2px 2px 14px #ccc;
  background: url("../assets/images/courseS.jpg") no-repeat 100% 100%;
  position: fixed;
  background-size: 100% 100%;

} */
.main {
  width: 80%;
  background-color: #c7cebd;
  margin: 0px auto;
}
.info {
  margin-top: 15px;
  font-weight: 700;
  font-size: 16px;
}
span {
  margin-left: 25px;
}
</style>