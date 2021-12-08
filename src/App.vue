<template>
	<v-app>
		<VFormProduct />
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
import VFormProduct from "@/components/VFormProduct";
export default {
	name: "FormProduct",
	components: {
		VFormProduct,
	},
};
</script>

<style>
.section {
	margin-bottom: 8em;
}
</style>