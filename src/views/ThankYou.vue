<template>
    <div class="mw-h-100 d-flex justify-content-center align-items-center body p-3">
        <div>
            <div class="shadow p-4 btn --bg-success bg-gradient">
                <div class="--text-white" style="line-height:35px">
                    <div class="fs-1 museo">
                        Thank You
                    </div>
                    <div class="--text-muted small fw-normal">
                        Check your mailbox for our message.
                    </div>
                    <button class="btn w-100 me-2 btn-success text-white rounded mt-4 p-3" @click="joinWP">
                        <span class="fs-6">
                            Proceed to Whatsapp Waitlist
                        </span>
                    </button>
                </div>
            </div>
            <div class="d-flex  justify-content-between w-100 py-3" style="left:0;bottom:0;">
               Share the Message
                <div class="fs-4 d-flex justify-content-around text-warning" style="min-width:130px">
                    <a target="_blank" :href="`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title={Mowgli}&summary=${text}&source=${url}`" >
                        <Icon icon="ion:logo-linkedin" />
                    </a>
                    <a target="_blank" :href="'https://twitter.com/intent/tweet?text='+text +'&url='+ url">
                        <icon icon="ion:logo-twitter"></icon>
                    </a>
                    <a :href="'whatsapp://send?text='+text +'/n' +url" data-action="share/whatsapp/share">
                        <Icon icon="ion:logo-whatsapp"></Icon>
                    </a>
                    <a target="_blank" :href="'https://facebook.com/sharer/sharer.php?u='+url">
                        <Icon icon="ion:logo-facebook" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue"

export default {
    name: "ThankYou",
    components: {
        Icon
    },
    data(){
        return {
            url:'https://go.softgreen.ng',
            text:"SoftgreenGO has just opened its Waitlist, we know you're anticipating.why not join the train???"
        }
    },
    methods:{
        joinWP() {
            window.location.href = "https://wa.me/2349130714128?text=Hello, I'm ------- and would like to join the waitlist"
        }
    }
}
</script>

<style lang="less" scoped>
.body {
    // background-image: url("../../public/images/sface.png    ");
    background-size: contain;
    background-repeat: no-repeat;
}
a{
    .text-success !important;
    color: var(--mw-yellow)
}

.text-success{}

</style>