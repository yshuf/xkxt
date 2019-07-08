<template>
  <div class="container">
    <!-- <h1>{{msg}}</h1> -->
    <div class="login">
      <fieldset>
        <legend>登录入口</legend>
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
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
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
          this.$message({
            type: "success",
            message: "登录成功，去选课"
          });
          this.$router.push("/selectMain");
        } else {
          s;
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
/* 登录框 */
.login {
  width: 280px;
  height: 200px;
  box-shadow: 2px 2px 14px #81d8ee;
  position: absolute;
  padding: 20px 0px 10px 0px;
  box-sizing: border-box;
  animation: changeColor 2s ease 3s infinite alternate;
  margin-left: 5px;
  margin-top: 50px;
}
fieldset {
  width: 280px;
  height: 213px;
  box-sizing: border-box;
  margin: -32px 0 0 0px;
  border: 1px solid #6baefa;
  font-family:cursive;
}
.el-form-item {
  margin-left: -40px;
}
@keyframes changeColor {
  from {
    background-color: #6baefa;
  }
  to {
    background-color: #96a8f8;
  }
}
</style>