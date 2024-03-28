<template>
	<div class="container">
		<div class="container-left">
			<img src="../../assets/png/left.png" />
			<h1 class="enter-y-t">Welcome!</h1>
			<p class="enter-y-t">
				好奇是知识的萌芽，问题不在于学到的是什么样的知识，而在于所学的知识有何用处
			</p>
		</div>
		<div class="container-right">
			<div class="login-form">
				<h2 class="login-title enter-y-t-30">登录</h2>
				<p class="login-sub-title enter-y-t-30">登录到您的帐户</p>
				<form class="enter-y-t-30">
					<div class="form-item">
						<input type="text" name="account" v-model="form.account" placeholder="用户名或邮箱" />
						<span>{{ error.account }}</span>
					</div>
					<div class="form-item">
						<input
							type="password"
							name="password"
							v-model="form.password"
							placeholder="密码"
							autocomplete="on"
							@keyup.enter.prevent="handleLogin" />
					</div>
					<div class="form-item login-action enter-y-t-20">
						<label>
							<input type="checkbox" v-model="form.rememberMe" />
							记住我
						</label>

						<a href="#">忘记密码?</a>
					</div>
					<div class=".enter-y-t-5">
						<button class="login-submit" type="primary" @click.prevent="handleLogin()">登录</button>
					</div>
					<p class="register-bottom-text .enter-y-t-5">还没有账号?<a href="/register">去注册</a></p>
				</form>
			</div>
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
	rememberMe: false,
});

const error = ref({
	account: "",
	password: "",
});

const handleLogin = () => {
	router.push("/");
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

.container-left {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #d6ebff;
	padding: 0 40px;
	color: #011051;
}

.container-left p {
	word-break: break-all;
}

.container-right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #ffffff;
}

.login-form {
	padding: 65px 110px 45px;
	border-radius: 10px;
}

.login-form input[type="text"],
.login-form input[type="password"] {
	width: 100%;
	padding: 10px 5px;
	box-sizing: border-box;
	border: #ccc solid 1px;
	border-radius: 5px;
	font-size: 16px;
}

.login-title,
.login-sub-title,
.register-bottom-text {
	text-align: center;
	padding-bottom: 10px;
}

.register-bottom-text a,
.login-action a {
	text-decoration: none;
}

.login-action label:hover {
	cursor: pointer;
}

.login-sub-title {
	margin-bottom: 10px;
}

.login-action {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5px 0 15px 0;
}

.login-submit {
	width: 100%;
	font-size: 16px;
	color: #ffffff;
	background-color: #4096ff;
	border-radius: 5px;
	padding: 8px 0;
	border: none;
}

.login-submit:hover {
	background-color: #69aafa;
	cursor: pointer;
}

.form-item input {
	margin: 15px 0;
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

@media screen and (max-width: 1000px) {
	.container {
		padding: 40px;
		grid-template-columns: 100%;
	}

	.container-left {
		display: none;
	}
}

@media screen and (max-width: 700px) {
	.container {
		padding: 40px;
		grid-template-columns: 100%;
	}

	.container-left {
		display: none;
	}

	.container-right {
		padding: 0;
	}

	.login-form {
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
