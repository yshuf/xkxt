<template>
  <div class="personalInfo">
    <form action>
      <fieldset>
        <legend>学生个人信息</legend>

        <label for="userName">姓名：</label>
        <input type="text" placeholder="请输入姓名" name="userName" v-model="form.username" />

        <label for="userPhone">手机号码：</label>
        <input type="tel" id="userPhone" name="userPhone" v-model="form.userPhone" />

        <label for="userEmail">邮箱地址：</label>
        <input type="email" id="userEmail" required name="userEmail" v-model="form.userEmail" />

        <label for="userAdd">所属学院：</label>
        <!-- 设置 list 属性 和 datalist 建立联系 -->
        <input
          type="text"
          id="userAdd"
          placeholder="请选择"
          name="userAdd"
          list="Clist"
          v-model="form.userAdd"
        />
        <datalist id="Clist">
          <option value="人间"></option>
          <option value="这里"></option>
          <option value="那里"></option>
        </datalist>

        <label for="score">入学成绩：</label>
        <input type="number" ref="score" max="750" min="0" v-model="form.score" />

        <label for>基础水平：</label>
        <meter max="750" min="0" low="300" high="750" ref="level"></meter>

        <label for="inTime">入学日期：</label>
        <input type="date" name="inTime" id="inTime" v-model="form.inTime" />

        <label for="outTime">毕业日期：</label>
        <input type="date" name="outTime" id="outTime" v-model="form.outTime" />

        <input type="submit" />
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs.score.oninput = this.getValue;
  },
  data() {
    return {
      form: {
        inTime: "",
        outTime: "",
        userAdd: "",
        userEmail: "",
        userPhone: "",
        username: "",
      },
      score: ""
    };
  },
  methods: {
    getValue() {
      this.$refs.level.value = this.score;
    }
  }
};
</script>

<style scoped>
.personalInfo {
  width: 666px;
  height: 688px;
  background-color: rgb(236, 218, 218);
  margin: 50px auto;
  font-size: 16px;
  font-family: cursive;
}
form {
  width: 555px;
  margin: 0 auto;
}
form > fieldset {
  padding: 10px;
  border: 1px solid #dfcbcb;
}
form > fieldset > meter,
form > fieldset > input {
  width: 100%;
  height: 35px;
  margin: 10px 0;
  line-height: 40px;
  border: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  padding-left: 5px;
  box-sizing: border-box;
}
form > fieldset > meter {
  padding-left: 0;
}
label {
  float: left;
}
</style>