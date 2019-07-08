<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="id">
        <el-input type="text" v-model="ruleForm.id" autocomplete="off" placeholder="账号统一为学号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="ruleForm.sex" placeholder="请选择性别">
          <el-option label="男" value="boy"></el-option>
          <el-option label="女" value="girl"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        id: "",
        pass: "",
        sex: ""
      },
      rules: {
        id: [{ required: true, trigger: "blur" }],
        pass: [
          {
            required: true,
            trigger: "blur"
          },
          {
            min: 6,
            max: 10,
            message: "密码长度应该在6到10位"
          }
        ],
        sex: [
          {
            required: true,
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
          //   alert("submit!");
          this.$message({
            type: "success",
            message: "注册成功,去登陆"
          });
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
  width: 100%;
  height: 100%;
  background: url('../assets/registerBG1.jpg') no-repeat center center;
  background-size: 100% 100%;
  box-sizing: border-box;
  position: fixed;
}
.el-form {
  padding: 30px 30px 10px 0px;
  width: 300px;
  height: 300px;
  box-shadow: 2px 2px 14px #85f1a5;
  box-sizing: border-box;
  margin: 150px auto;
}

</style>