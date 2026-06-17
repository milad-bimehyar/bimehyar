async function sendToTelegram(name, phone, insurance) {
    // ۱. گرفتن آی‌پی کاربر (خیلی ساده)
    let ip = "در حال بررسی...";
    try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        ip = data.ip;
    } catch(e) { ip = "خطا در دریافت IP"; }

    // ۲. ارسال پیام به تلگرام
    const token = "8955697449:AAF-o1tz1LHuBEZb168HE47RlIy1-fXYCE4";
    const chatId = "7111812055";

    const message = `🔥 لید جدید از سایت بیمه‌یار
👤 نام: ${name}
📞 شماره: ${phone}
🛡 نوع بیمه: ${insurance}
🌍 IP کاربر: ${ip}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message })
    });
}
