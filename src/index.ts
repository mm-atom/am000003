/**
 * 获取存储
 * @param mm 固定参数
 * @param key 键
 * @param [default_value] 默认值
 */
export default function get<T>(key: string, default_value?: T) {
	return global[key] as T || default_value;
}
