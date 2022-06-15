<template>
    <div class="w-100" style="overflow-x: hidden;">
        <div class="row align-items-stretch mw-h-100" style="overflow-x: hidden;">
            <div class="col-12 col-md-6">
                <div class="h-100 bg-success --bg-gradient position-relative" >
                    <div class="position-absolute d-flex justify-content-between align-items-center p-2"
                        style="left:0;top:0">
                        <div class="text-white fs-2 museo">
                            Mowgli
                        </div>
                        <!-- <div class="text-l-gray fw-normal d-flex">
                            ---Share with someone
                            <div class="fs-4 d-flex justify-content-around ms-2" style="min-width:130px">
                                <Icon icon="ion:logo-instagram" ></Icon>
                                <Icon icon="ion:logo-linkedin" />
                                <Icon icon="ion:logo-facebook" />
                                <icon icon="ion:logo-twitter"></icon>
                            </div>
                        </div> -->
                    </div>
                    <img class="h-100 w-100" src="../../public/images/businessman.jpg" style="" />
                    <div class="position-absolute w-100 p-3 small" style="left:0;bottom:0; color:lightgray">
                        (c) Mowgli 2022, SoftGreen RC 21830473
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="bg-white h-100 w-100 d-flex justify-content-center align-items-center p-5 p-md-4 position-relative">
                    <div class="position-absolute w-100 text-center" style="left:0;top:0">
                        <img src="../../public/images/logo.png" class="mt-4 mb-5" height="50" />
                    </div>


                    <div class="my-5 py-5 mt-lg-0">
                        <div class="">
                            <div class="IamTheHeader" style="line-height:35px">
                                <div class="h1 museo">
                                    We know you're anticipating
                                </div>
                                <!-- <div class="text-muted fs-4 fw-normal">
                                    Join the queue...
                                </div> -->
                            </div>
                            <div class="mt-3 text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe id totam cum
                                dolorum dicta quia?
                                Saepe fuga enim iusto, corrupti accusamus assumenda quibusdam consectetur architecto
                                suscipit nihil et
                                fugiat.
                            </div>
                        </div>

                        <div class="form mt-4 w-100">
                            <div class="row" style="overflow-x:hidden">
                                <div class="col-12 col-sm-6">
                                    <input class="rounded btn w-100 p-3 me-2 text-start shadow mt-3 form-control"
                                        placeholder="Full Name" /><br />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input class="rounded btn w-100 p-3 me-2 text-start shadow mt-3 form-control"
                                        placeholder="Email" /><br />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <input class="rounded btn w-100 p-3 me-2 text-start shadow mt-4 form-control"
                                        placeholder="Whatsapp" /><br />
                                </div>
                                <div class="col-12 col-sm-6">
                                    <button class="btn w-100 me-2 btn-success rounded mt-4 p-3">
                                        <span class="fs-6">
                                            Join the List
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute d-flex  justify-content-between w-100 p-3 px-5" style="left:0;bottom:0;">
                        Check us out... 
                        <div class="fs-4 d-flex justify-content-around text-warning ms-2" style="min-width:130px">
                                <Icon icon="ion:logo-instagram" ></Icon>
                                <Icon icon="ion:logo-linkedin" />
                                <Icon icon="ion:logo-facebook" />
                                <icon icon="ion:logo-twitter"></icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Icon} from "@iconify/vue"

export default {
    name: "HomePage",
    components: {
        Icon
    }
}
</script>

<style lang="less" scoped>
</style>