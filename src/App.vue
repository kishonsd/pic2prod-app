<template>
	<v-app>
		<VAppBar />
		<v-main>
			<router-view>
			<router-link to="/register">Sign Up</router-link>
            <router-link to="/signin">Login</router-link>
			</router-view>
		</v-main>
	</v-app>
</template>

<script>
import VAppBar from "@/components/VAppBar";

export default {
	name: "App",
	components: {
		VAppBar,
	},
};
</script>

<style>
.section {
	margin-bottom: 8em;
}
</style>
