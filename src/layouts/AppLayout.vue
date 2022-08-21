<script setup>
	import { onMounted } from "vue";
	import { RouterView } from "vue-router";
	import AppNavBar from "../components/AppNavBar.vue";
	import AppSideBar from "../components/AppSideBar.vue";
	import AppFooter from "../components/AppFooter.vue";

	onMounted(() => {
		const body = document.querySelector("body");
		body.className = "";
		body.classList = "sidebar-mini layout-fixed";
		body.style.height = "auto";
		body.style.minHeight = null;
	});
</script>

<template>
	<div class="wrapper">
		<!-- Preloader -->
		<div
			class="preloader flex-column justify-content-center align-items-center"
			style="height: 0px"
		>
			<img
				class="animation__shake"
				src="../assets/img/AdminLTELogo.png"
				alt="AdminLTELogo"
				style="display: none"
				width="60"
				height="60"
			/>
		</div>
		<!-- Preloader -->
		<AppNavBar />
		<AppSideBar />
		<div class="content-wrapper" style="height: auto">
			<section class="content">
				<RouterView />
			</section>
		</div>
		<AppFooter />
	</div>
</template>
