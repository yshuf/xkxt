<template>
  <div class="container">
    <!-- <h1>{{msg}}</h1> -->
    <div class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="学号" prop="id">
          <el-input v-model.number="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "学生选课小系统",
      ruleForm: {
        id: "",
        pass: ""
      },
      rules: {
        id: [{ required: true, message: "请输入学号", trigger: "blur" }],
        pass: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 5,
            message: "至少5位数",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          this.$router.push("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
h1 {
  font-weight: 400;
  font-family: cursive;
  font-style: italic;
}
.login {
  width: 300px;
  height: 200px;
  box-shadow: 2px 2px 14px #cccccc;
  position: absolute;
  padding: 20px 30px 10px 0px;
  box-sizing: border-box;
  animation: changeColor 5s ease 3s infinite alternate;
  margin-left: 5px;
  margin-top: 50px;
}
.el-form-item {
  margin-left: 0px;
}
@keyframes changeColor {
  from {
    background-color: #80afec;
  }
  to {
    background-color: #aed3f6;
  }
}
</style>