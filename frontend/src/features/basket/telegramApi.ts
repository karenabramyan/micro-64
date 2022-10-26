export default async function sendApplication(user: any, items: any): Promise<void> {
  const chatId = '-1001699060358';
  const token = '5527129052:AAHmu3wIoP5ry_gHcByJVbzfTC3fPKYOhV4';
  const br = '%0A'; // перенос строки
  const text = `имя заказчика: ${user.login} ${br}email: ${user.email} ${br}телефон заказчика: ${user.phone} ${br}товар: ${items.title} ${br}тип сделки: ${items.type} ${br}стоимость: ${items.price}`;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}=@saratov_micro64&parse_mode=HTML&text=${text}`);
}
