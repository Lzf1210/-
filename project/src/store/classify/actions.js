import axios from "axios";
export default {
    clickList({ commit }, index) {
        if (index <= 4) {
            axios({
                method: "get",
                url: "/mp/goods/havetypeid?typeId=" + index
            }).then((data) => {
                commit('clickList',data)
            })
        }

    }
}