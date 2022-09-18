<template>
    <div class="w-100 body position-relative" >
        <img src='../../public/images/groceries.jpg' class="position-absolute images up"/>
        <img src='../../public/images/groceries2.jpg' class="position-absolute images down"/>
        <div class="h-100 w-100 text-center p-3 p-md-5">
            <div class="text-center">
                <img src="../../public/images/logo.png" class="mb-5" height="50" />
            </div>
            <div class="" _style="min-height:50vh;">
                <div class="text-center">
                    <div class="head-font-size" style="">
                        <div class="museo fw-bold text-dark">
                            Hey!<br>
                            We're cooking it up
                        </div>
                    </div>
                    <div class="mt-3 text-muted fs-5">
                        We are just a few days from our big launch. Sign up to be notified!
                    </div>
                </div>

                <div class="form mt-4 w-100 px-4 px-md-0">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-6 col-md-3">
                            <input class="rounded btn w-100 p-3 me-2 text-start shadow-sm mt-3 form-control"
                                placeholder="Full Name" /><br />
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <input class="rounded btn w-100 p-3 me-2 text-start shadow-sm mt-3 form-control"
                                placeholder="Email" /><br />
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <input class="rounded btn w-100 p-3 me-2 text-start shadow-sm mt-4 form-control"
                                placeholder="Whatsapp" /><br />
                        </div>
                        <div class="col-12 col-sm-6 col-md-2">
                            <button class="btn w-100 me-2 btn-success rounded mt-4 p-3">
                                <span class="fs-6">
                                    Join the List
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="--bg-white d-flex flex-wrap justify-content-center w-100 mt-5 pt-5 p-3">
                <div class="fs-4 d-flex justify-content-around text-warning ms-2" style="min-width:200px">
                    <Icon icon="ion:logo-instagram"></Icon>
                    <Icon icon="ion:logo-linkedin" />
                    <Icon icon="ion:logo-facebook" />
                    <icon icon="ion:logo-twitter"></icon>
                </div>
                <div class="w-100 small text-muted fw-bold mt-3">
                    (c) Mowgli 2022, SoftGreen RC 21830473
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue"

export default {
    name: "HomePage",
    components: {
        Icon
    }
}
</script>

<style scoped>
.head-font-size {
    line-height: 5vw;
    font-size: 5vw
}

@media(max-width:768px) {
    .head-font-size {
        line-height: 9vw;
        font-size: 9vw
    }
}

.text-dark {
    color: black !important
}
.body{
    overflow-x: hidden;
    min-height: 100vh;
}
.images {
    z-index: -10000500 !important;
    max-width: 60vh;
}
.up {
    right:0;
    top:0;
}
.down {
    position:0;
    bottom: 0;
}
</style>