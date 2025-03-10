const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log("📥 받은 요청 데이터:", JSON.stringify(req.body, null, 2));  // 요청 데이터 출력

    const intentName = req.body?.userRequest?.utterance || "No intent";  
    console.log("💡 추출된 intent:", intentName);  // 어떤 intent가 호출되었는지 확인

    let responseText = "죄송합니다. 요청을 이해하지 못했습니다.";  // 기본 응답

    if (intentName === "보험 가입") {
        responseText = "안녕하세요! 보험 가입 도와드릴까요?";
    } else if (intentName === "보험 청구") {
        responseText = "보험 청구 관련 정보를 안내해드릴게요.";
    }

    const response = {
        fulfillmentText: responseText
    };

    console.log("📤 보낼 응답 데이터:", JSON.stringify(response, null, 2));  // 응답 데이터 출력
    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
