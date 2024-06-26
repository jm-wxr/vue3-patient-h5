import type {
  DocParams,
  DoctorPage,
  KnowledgePage,
  KnowledgeParams,
  LikeType,
  Picture,
  TopDep,
  ConsultOrderPreParams,
  ConsultOrderPreData,
  PartialConsult,
  ConsultPayUrlParams
} from '@/types/consult'
import request from '@/utils/request'

// 获取文章列表
export const getKownledgePage = (params: KnowledgeParams) => {
  return request<KnowledgePage>('/patient/home/knowledge', 'GET', params)
}

// 获取推荐医生列表
export const getDoctorPage = (params: DocParams) => {
  return request<DoctorPage>('/home/page/doc', 'GET', params)
}

// 关注操作
export const like = (type: LikeType, id: string) => {
  return request('/like', 'POST', { type, id })
}

// 获取科室列表
export const getAllDep = () => {
  return request<TopDep[]>('/dep/all')
}

// 上传图片
export const uploadImage = (file: File) => {
  const fd = new FormData()
  fd.append('file', file)
  return request<Picture>('/upload', 'POST', fd)
}

// 拉取预支付订单信息
export const getConsultOrderPre = (params: ConsultOrderPreParams) => {
  return request<ConsultOrderPreData>('/patient/consult/order/pre', 'GET', params)
}

// 生成订单
export const createConsultOrder = (data: PartialConsult) => {
  return request<{ id: string }>('/patient/consult/order', 'POST', data)
}

// 获取支付地址
export const getConsultOrderPayUrl = (params: ConsultPayUrlParams) => {
  return request<{ payUrl: string }>('/patient/consult/pay', 'POST', params)
}
