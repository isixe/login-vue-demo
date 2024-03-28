<template>
	<div class="container">
		<div class="container-left">
			<div class="register-form">
				<h2 class="register-title enter-y-t-30">注册</h2>
				<p class="register-sub-title enter-y-t-30">注册您的帐户</p>
				<form class="enter-y-t-30">
					<div class="form-item" label="用户名">
						<input type="text" v-model="form.account" placeholder="请输入用户名" />
					</div>
					<div class="form-item" label="邮箱">
						<input type="email" v-model="form.email" placeholder="请输入邮箱" />
					</div>
					<div class="form-item" label="密码">
						<input
							type="password"
							v-model="form.password"
							placeholder="请输入密码"
							autocomplete="new-password" />
					</div>
					<div class="form-item" label="重复密码">
						<input
							type="password"
							v-model="form.checkPassword"
							placeholder="请输入密码"
							@keyup.enter.prevent="handleRegister()" />
					</div>
					<div class=".enter-y-t-5">
						<button class="register-submit" @click.prevent="handleRegister()">注册</button>
					</div>
					<p class="login-bottom-text .enter-y-t-5">已有账号?<a href="/login">去登录</a></p>
				</form>
			</div>
		</div>
		<div class="container-right">
			<img src="../../assets/png/right.png" />
			<h1 class="enter-y-t">Greet!</h1>
			<p class="enter-y-t">
				发现新事物和作出新发现，是很大的满足。我们活着只为的是去发现美。其他一切都是等待的种种形式。
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = ref({
	account: "",
	password: "",
	checkPassword: "",
	rememberMe: false,
});

const handleRegister = () => {
	router.push("/login");
};
</script>

<style scoped>
.container {
	min-height: 100vh;
	padding: 60px;
	display: grid;
	grid-template-columns: 50% 50%;
	background-image: url(../../assets/png/bg.png);
	background-repeat: no-repeat;
	background-size: cover;
	box-sizing: border-box;
}

.container-right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #d6ebff;
	padding: 0 40px;
	color: #011051;
}

.container-right h1 {
	text-align: right;
}

.container-right p {
	word-break: break-all;
}

.container-left {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #ffffff;
}

.register-form {
	padding: 10px 110px;
	border-radius: 10px;
}

.register-title,
.register-sub-title,
.login-bottom-text {
	text-align: center;
	padding-bottom: 10px;
}

.register-sub-title {
	margin-bottom: 20px;
}

.register-checkbox {
	display: flex;
	justify-content: space-between;
}

.form-item input {
	margin: 15px 0;
}

.register-submit {
	width: 100%;
	font-size: 16px;
	color: #ffffff;
	background-color: #4096ff;
	border-radius: 5px;
	padding: 8px 0;
	border: none;
	margin-top: 15px;
}

.register-submit:hover {
	background-color: #69aafa;
	cursor: pointer;
}

.register-form input[type="text"],
.register-form input[type="email"],
.register-form input[type="password"] {
	width: 100%;
	padding: 10px 5px;
	box-sizing: border-box;
	border: #ccc solid 1px;
	border-radius: 5px;
	font-size: 16px;
}

.login-bottom-text a {
	text-decoration: none;
}

.enter-y-t {
	animation: enter-x-t-animation 0.65s ease-in-out 0.3s;
	animation-fill-mode: forwards;
}

.enter-y-t-5 {
	animation: enter-x-t-min-animation 0.45s ease-in-out 0.3s;
	animation-fill-mode: forwards;
}

.enter-y-t-10 {
	animation: enter-x-t-animation 0.55s ease-in-out 0.3s;
	animation-fill-mode: forwards;
}

.enter-y-t-20 {
	animation: enter-x-t-animation 0.65s ease-in-out 0.3s;
	animation-fill-mode: forwards;
}

.enter-y-t-30 {
	animation: enter-x-t-animation 0.75s ease-in-out 0.3s;
	animation-fill-mode: forwards;
}

.enter-y-t-40 {
	animation: enter-x-t-animation 0.85s ease-in-out 0.3s;
	animation-fill-mode: forwards;
}

@media screen and (max-width: 1200px) {
	.container {
		grid-template-columns: 60% 40%;
	}
}

@media screen and (max-width: 1000px) {
	.container {
		grid-template-columns: 100%;
	}

	.container-right {
		display: none;
	}
}

@media screen and (max-width: 700px) {
	.container {
		padding: 40px;
		grid-template-columns: 100%;
	}

	.container-right {
		display: none;
	}

	.container-left {
		padding: 0;
	}

	.register-form {
		padding: 65px 50px 45px;
	}
}

@keyframes enter-x-t-animation {
	from {
		opacity: 0;
		transform: translateY(50px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes enter-x-t-min-animation {
	from {
		opacity: 0;
		transform: translateY(25px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
