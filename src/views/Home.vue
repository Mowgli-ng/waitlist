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

                <form class="form mt-4 w-100 px-4 px-md-0" @submit.prevent="submit">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-6 col-md-3">
                            <input class="rounded btn w-100 p-3 me-2 text-start shadow-sm mt-3 form-control"
                                placeholder="Full Name" v-model="form.full_name" required /><br />
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <input class="rounded btn w-100 p-3 me-2 text-start shadow-sm mt-3 form-control"
                                placeholder="Email" v-model="form.email" type="email" required /><br />
                        </div>
                        <div class="col-12 col-sm-6 col-md-3">
                            <input class="rounded btn w-100 p-3 me-2 text-start shadow-sm mt-4 form-control"
                                placeholder="Whatsapp" v-model="form.whatsapp" type="tel" required /><br />
                        </div>
                        <div class="col-12 col-sm-6 col-md-2">
                            <button type="submit" class="btn w-100 me-2 btn-success rounded mt-4 p-3">
                                <span class="fs-6">
                                    Join the List
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="--bg-white d-flex flex-wrap justify-content-center w-100 mt-5 pt-5 p-3">
                <div class="fs-4 d-flex justify-content-around text-warning ms-2" style="min-width:200px">
                    <a href="https://instagram.com/softgreen_go" class="text-warning">
                        <Icon icon="ion:logo-instagram"></Icon>
                    </a>
                    <a href="https://m.facebook.com/profile.php?id=100086033769135" class="text-warning">
                        <Icon icon="ion:logo-facebook"></Icon>
                    </a>
                    <a href="https://www.linkedin.com/company/softgreen-ng/" class="text-warning">
                        <Icon icon="ion:logo-linkedin"></Icon>
                    </a>
                    <!-- <a href="">
                        <Icon icon="ion:logo-instagram"></Icon>
                    </a> -->
                </div>
                <div class="w-100 small text-muted fw-bold mt-3">
                    (c) SoftgreenGO 2022, SoftGreen RC 21830473
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from "@iconify/vue"
import Widget from "@/functions/widget"

export default {
    name: "HomePage",
    components: {
        Icon
    },
    data() {
        return {
            form: {
                full_name:""
            }
        }
    },
    methods: {
        getFormData(){
            let formdata = new FormData();
            for (let x of Object.keys(this.form)) {
                console.log(x, this.form[x])
                formdata.append(x, this.form[x])
            }
            return formdata;
        },
        async submit(){
            Widget.openLoading()
            let res = await fetch(`https://mowgli.ng/waitlist.php?full_name=${this.form.full_name}&email=${this.form.email}&whatsapp=${this.form.whatsapp}`,{
                method:'GET',
            })
            let data = await res.json()
            if(data.success){
                this.$router.push('/thanks')
            }
            else {
                this.toast.show("An error Occured")
            }

            Widget.dismiss()
        }
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
div, button, input {
    font-size:12px
}
</style>