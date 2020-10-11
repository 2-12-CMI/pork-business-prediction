# -*- conding: utf-8 -*-



from konlpy.tag import Okt; 
t=Okt()
from gensim import corpora
from gensim import models
import numpy as np; np.random.seed(42)
import numpy as np; np.random.seed(42)

def topicModeling(docs_ko):
    ntopics, nwords = 3, 5
    texts_ko = [t.nouns(doc) for doc in docs_ko]
    dictionary_ko = corpora.Dictionary(texts_ko)
    dictionary_ko.save('ko.dict')
    tf_ko = [dictionary_ko.doc2bow(text) for text in texts_ko]
    tfidf_model_ko = models.TfidfModel(tf_ko)
    tfidf_ko = tfidf_model_ko[tf_ko]
    corpora.MmCorpus.serialize('ko.mm', tfidf_ko)
    ntopics, nwords = 3, 5
    lsi_ko = models.lsimodel.LsiModel(tfidf_ko, id2word=dictionary_ko, num_topics=ntopics)
    lda_ko = models.ldamodel.LdaModel(tfidf_ko, id2word=dictionary_ko, num_topics=ntopics)
    hdp_ko = models.hdpmodel.HdpModel(tfidf_ko, id2word=dictionary_ko)

    LSI = lsi_ko.print_topics(num_topics=ntopics, num_words=nwords)
    LDA = lda_ko.print_topics(num_topics=ntopics, num_words=nwords)
    HDP = hdp_ko.print_topics(num_topics=ntopics, num_words=nwords)

    return {
        "LSI":LSI,
        "LDA":LDA,
        "HDP":HDP
    }



# docs_ko = [u"""정부가 9월부터 ASF 피해 농가 재입식을 위한 사전 절차를 진행하겠다고 밝혔다.
# ASF 중앙사고수습본부(중수본)는 지난 28일 여름철 야생멧돼지서 사육돼지로의 ASF 확산을 막기 위해 ‘여름철 아프리카돼지열병 방역 강화 대책’을 발표했다. 골자는 여름철 양돈장 ASF 확산을 저지하기 위해 농장단위 차단방역을 강화하고, 야생멧돼지 아프리카돼지열병 확산을 차단하기 위한 멧돼지 포획과 울타리 설치·보완, 폐사체 수색과 소독 등을 통한 위험지역 오염원 제거다.
# 이에 따라 중수본은 여름철 ASF 위험성이 높아짐의 이유로 8월까지는 ASF 살처분한 농가(261호)의 재입식을 허용하지 않을 방침이라고 밝혔다. 이후 여름철이 지나고, 사육돼지에서 발생하지 않을 경우 멧돼지 발생상황과 전문가 의견 등을 종합적으로 고려, 9월부터 농장 세척·소독·점검 등 재입식과 관련된 사전절차를 진행키로 했다.
# 이를 위해 이달부터 아프리카돼지열병 중점방역관리지구 지정과 강화된 방역시설 기준에 대한 근거 마련을 위해 ‘가축전염병예방법’ 시행규칙 개정을 추진키로 했다. 방역 시설 강화 기준은 멧돼지·야생 조수류 등 매개체의 농장 진입을 막기 위한 △외부 울타리와 △방조·방충망 △폐사체 보관시설 △내부 울타리 △입출하대 △방역실 △전실 △물품반입시설 등 방역 시설 설치가 골자다.
# 중수본은 이 같이 ‘가축전염병예방법 시행규칙’ 개정이 완료되면 중점방역관리지구를 지정하고 ‘강화된 방역시설 기준을 갖춘 농장’에 한해 재입식을 허용할 계획이라고 밝혔다.""",""]


# topicModeling(docs_ko)