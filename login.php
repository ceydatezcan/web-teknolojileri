<?php
// Kullanıcı adı ve şifre alınıyor
$username = $_POST['username'];
$password = $_POST['password'];

// Kullanıcı adı ve şifre boş mu kontrol ediliyor
if(empty($username) || empty($password)) {
    header("Location: giris.html");
    exit;
}

// Kullanıcı adı, geçerli bir e-posta adresi mi kontrol ediliyor
if(!filter_var($username, FILTER_VALIDATE_EMAIL)) {
    header("Location: giris.html");
    exit;
}

// Kullanıcı adından ilk 10 karakter alınıyor (şifre olarak kabul ediliyor)
$expected_password = substr($username, 0, 10);

// Girilen şifre, beklenen şifre ile eşleşiyor mu kontrol ediliyor
if($password === $expected_password) {
    // Başarılı giriş durumunda hoşgeldin mesajı gösteriliyor
    echo "Hoşgeldiniz \"$username\"";
} else {
    // Başarısız giriş durumunda tekrar giriş yapılması için login sayfasına yönlendiriliyor
    header("Location: giris.html");
    exit;
}
?>
