import {configureStore} from "@reduxjs/toolkit"
import Slice from "./laundry-slice/laundry-order"
export default configureStore({
    reducer:{
data:Slice
    }
})