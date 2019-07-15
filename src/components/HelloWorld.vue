<template>
	<div>
		<div class="down_wrap">
			<div class="down_bg">
				<img src="../assets/down_bg.png" />
			</div>
			<div class="box">
				<div class="phone"><img src="../assets/phone.png" /></div>
				<a href="http://39.106.95.1:8092/djdl.apk" class="down"><img src="../assets/down.png" download="大吉大利" /></a>
			</div>
		</div>
	</div>
</template>

<script>
	var w =
		document.documentElement.clientWidth < 750 ?
		document.documentElement.clientWidth :
		"750";
	import { web_url, http } from "@/api/request";
	import $ from "jquery";
	import { Stomp } from "stompjs/lib/stomp.js";
	import moment from "moment";

	let sock;
	let stompClient;
	let bgAudio = new Audio();
	const gamTypeOrder = {
		CHICKEN: 1,
		NO_CHICKEN: 2,
		PEAR: 3,
		NO_PEAR: 4,
		ALL: 5,
		NOTHING: 6
	};
	export default {
		name: "HelloWorld",
		data() {
			return {

			};
		},
		mounted() {

		},
		watch: {
			up_open: function(value) {
				if(!value) {
					console.log(value);
				}
			}
		},
		computed: {

		},
		methods: {

		}
	};
</script>
<style>
	body {
		background: #000 !important;
	}
	
	.down_wrap {
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
	.down_bg{
		width: 100%;
		height: 100%;
	}
	.down_bg img{
		display: block;
		width: 100%;
		height: 100%;
		opacity: 0.5;
	}
	.box {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	
	.phone img {
		display: block;
		width: 12.5rem;
		margin: 0 auto;
	}
	
	.down img {
		display: block;
		width: 11rem;
		margin: 1.5rem auto;
	}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->