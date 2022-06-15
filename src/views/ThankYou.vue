<template>
    <div class="mw-h-100 d-flex justify-content-center align-items-center">
        <div>
            <div class="shadow p-5 btn --bg-success bg-gradient">
                <div class="--text-white" style="line-height:35px">
                    <div class="fs-1 museo">
                        Thank You
                    </div>
                    <div class="text-muted fs-6 fw-normal">
                        we've got your wait...
                    </div>
                    <button class="btn w-100 me-2 btn-success text-white rounded mt-4 p-3">
                        <span class="fs-6">
                            Join the Whatsapp Waitlist
                        </span>
                    </button>
                </div>
            </div>
            <div class="d-flex  justify-content-between w-100 py-3" style="left:0;bottom:0;">
               Share the Message
                <div class="fs-4 d-flex justify-content-around text-warning" style="min-width:130px">
                    <Icon icon="ion:logo-instagram"></Icon>
                    <Icon icon="ion:logo-linkedin" />
                    <Icon icon="ion:logo-facebook" />
                    <icon icon="ion:logo-twitter"></icon>
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
    }
}
</script>

<style lang="less" scoped>
</style>