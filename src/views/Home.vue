<template>
	<v-container class="text-center">
		<v-row class="section">
			<v-col cols="12">
				<h1 class="display-2 font-weight-bold">
					Post products in marketplaces in seconds
				</h1>
				<p class="headline mt-5">
					Sign in, add product and select where to post
				</p>
				<span class="overline grey--text">(no coding required)</span>
			</v-col>
			<v-col cols="12">
				<v-btn class="mx-auto d-block" size="large" color="primary"
					>Get Started</v-btn
				>
			</v-col>
		</v-row>

		<v-row class="section">
			<v-col>
				<h1 class="display-2 font-weight-bold mb-5">
					Add your stores with ease
				</h1>
				<p class="headline mt-5">
					Type in your tokens or hit the OAuth button to authenticate posting
					products on your behalf.
				</p>
			</v-col>
			<v-col cols="12">
				<v-sheet color="white" elevation="4" height="400px" width="auto">
					<v-toolbar dense flat>
						<div
							class="red ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
						<div
							class="green ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
						<div
							class="yellow ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
					</v-toolbar>
				</v-sheet>
			</v-col>
		</v-row>

		<v-row class="section">
			<v-col>
				<h1 class="display-2 font-weight-bold mb-5">Add products with ease</h1>
				<p class="headline mt-5">
					In your product dashboard, add product information such as price,
					description and an image.
				</p>
			</v-col>
			<v-col cols="12">
				<v-sheet color="white" elevation="4" height="400px" width="auto">
					<v-toolbar dense flat>
						<div
							class="red ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
						<div
							class="green ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
						<div
							class="yellow ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
					</v-toolbar>
				</v-sheet>
			</v-col>
		</v-row>

		<v-row class="section">
			<v-col>
				<h1 class="display-2 font-weight-bold mb-5">
					Post products just like that
				</h1>
				<p class="headline mt-5">
					With all your stores and products in your dashboard, with a simple
					click they get posted right away to your digital stores.
				</p>
			</v-col>
			<v-col cols="12">
				<v-sheet color="white" elevation="4" height="400px" width="auto">
					<v-toolbar dense flat>
						<div
							class="red ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
						<div
							class="green ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
						<div
							class="yellow ml-2"
							style="width: 12px; height: 12px; border-radius: 50px"
						></div>
					</v-toolbar>
				</v-sheet>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<h1 class="display-2 font-weight-bold mb-5">Supported stores</h1>
			</v-col>
			<v-col>
				<ul id="stores">
					<li>
						<v-img
							class="mx-auto d-block"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png"
							max-width="200"
						></v-img>
					</li>
					<li>
						<v-img
							class="mx-auto d-block mt-5"
							src="https://assets.zerosix.com/static/corporate/partners/images/hiboutik/partenaire-caisses-logiciels-hiboutik.png"
							max-width="200"
						></v-img>
					</li>
					<li>
						<v-img
							class="mx-auto d-block mt-5"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/1200px-WooCommerce_logo.svg.png"
							max-width="200"
						></v-img>
					</li>

					<li>
						<v-img
							class="mx-auto d-block mt-5"
							src="https://i.pinimg.com/564x/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
							max-width="200"
						></v-img>
					</li>

					<li>
						<v-img
							class="mx-auto d-block mt-5"
							src="https://download.logo.wine/logo/Shopify/Shopify-Logo.wine.png"
							max-width="200"
						></v-img>
					</li>

					<li>
						<v-img
							class="mx-auto d-block mt-5"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Prestashop.svg/1200px-Prestashop.svg.png"
							max-width="200"
						></v-img>
					</li>
				</ul>
			</v-col>
		</v-row>
</template>

<script>
export default {
	name: "Home",
};
</script>

<style scoped>
#stores li {
	display: inline;
	float: left;
	margin-right: 5rem;
	margin-left: 5rem;
}
</style>
