import { useLoading } from 'vue-loading-overlay';
let load

export default class Widget {
    // ontainer = document.getElementsByTagName("body")[0]
    static openLoading = (con) => {
        let container = con ?? null
        load = useLoading().show({
            loader: "dots",
            color: "green",
            container,

        })
        setTimeout(function(){
            load.hide()
        }, 1000000)
        // document.getElementById("loading").classList.remove("d-none")
    }
    static dismiss = () => {
        load.hide()
        // console.log(load)
        // document.getElementById("loading").classList.add("d-none")
    }
    static goTo = (link) => {
        setTimeout(function(){
            this.$router.push(link)
        }, 0)
    }
}



