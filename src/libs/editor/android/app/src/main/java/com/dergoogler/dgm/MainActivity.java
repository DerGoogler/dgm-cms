package com.dergoogler.dgm;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.KeyEvent;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.security.GeneralSecurityException;
import java.util.Objects;


public class MainActivity extends AppCompatActivity {
    WebView webView;
    String url = "file:///android_asset/www/index.html";

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getWindow().setStatusBarColor(0xFF000000);

        Objects.requireNonNull(getSupportActionBar()).hide();

        webView = findViewById(R.id.web);

        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setSupportZoom(false);
        webView.getSettings().setDomStorageEnabled(true);
        webView.setWebViewClient(new myWebViewclient());
        webView.addJavascriptInterface(new Object() {
            @JavascriptInterface
            public void showMessage(String content) {
                Toast.makeText(MainActivity.this, content, Toast.LENGTH_SHORT).show();
            }

            @JavascriptInterface
            public String encryptAES(String password, String text) throws GeneralSecurityException {
                return AESCrypt.encrypt(password, text);
            }

            @JavascriptInterface
            public String decryptAES(String password, String text) throws GeneralSecurityException {
                return AESCrypt.decrypt(password, text);
            }

            @JavascriptInterface
            public void open(String link) {
                Uri uriUrl = Uri.parse(link);
                Intent launchBrowser = new Intent(Intent.ACTION_VIEW, uriUrl);
                startActivity(launchBrowser);
            }

            @JavascriptInterface
            public void copyToClipboard(String content) {
                ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
                ClipData clip = ClipData.newPlainText("copy", content);
                clipboard.setPrimaryClip(clip);
            }
        }, "Android");

        webView.loadUrl(url);
    }

    public class myWebViewclient extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            view.loadUrl(url);
            return true;
        }

        @Override
        public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
            Toast.makeText(getApplicationContext(), "No internet connection", Toast.LENGTH_LONG).show();
            webView.loadUrl("file:///android_asset/lost.html");
        }

    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {

        if ((keyCode == KeyEvent.KEYCODE_BACK) && webView.canGoBack()) {
            webView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }
}
