export class CommonUtil {
	public static makeListFromEnum(enumItem: Object): string[] {
		return Object
			.keys(enumItem)
			.map((key: string) => {
				return enumItem[key];
			});
	}
}
