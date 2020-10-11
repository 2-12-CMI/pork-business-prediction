from flask import Flask, request, jsonify
import topic

app = Flask(__name__)
 
@app.route('/topicModeling', methods = ['POST'])
def topicModeling():
    data = request.get_json()#json 데이터를 받아옴
    print(data)
    news = data['news']
    result = topic.topicModeling([news,""])
    print(result)
    return jsonify(result)# 받아온 데이터를 다시 전송
 
 
if __name__ == "__main__":
    app.run()
