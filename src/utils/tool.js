import {ElMessage} from 'element-plus'

function Message(type,msg){
    ElMessage({
        message:msg,
        type:type,
    })
}

const sourceOpt = [
    {
        label: "CNKI-知网",
        value: 1,
    },
    {
        label: "Web of Science",
        value: 2,
    },
]

const statusOpt = [
    {
        label: "待处理",
        value: "0",
    },
    {
        label: "处理中",
        value: "1",
    },
    {
        label: "处理成功",
        value: "2",
    },
    {
        label: "处理失败",
        value: "3",
    },
    {
        label: "取消",
        value: "4",
    },
]


export {
    Message, sourceOpt, statusOpt
}