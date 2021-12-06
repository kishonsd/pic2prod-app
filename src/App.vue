<template>
	<v-app>
		<VAppBar />
		<v-main>
			<router-view />
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
