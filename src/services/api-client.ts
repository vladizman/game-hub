import axios from "axios";

  export default axios.create({
    baseURL:"https://api.rawg.io/api",
params: {
    key:  "b0e442021bc54d378bd0ec64d5afa944"
}
})