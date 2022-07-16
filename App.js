import axios from 'axios';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Provider as PaperProvider, RadioButton} from 'react-native-paper';

const App = () => {
  const mapQuestionValue = {
    '0 - NEVER': 0,
    '1 - SOMETIMES': 1,
    '2 - OFTEN': 2,
    '3 - ALMOST ALWAYS': 3,
  };

  const [questionsMap, setQuestionMap] = useState([
    {
      question: 'I found myself getting upset by quite trivial things ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I was aware of dryness of my mouth ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: "I couldn't seem to experience any positive feeling at all ?",
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion) ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: "I just couldn't seem to get going ?",
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I tended to over-react to situations ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I had a feeling of shakiness (eg, legs going to give way) ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I found it difficult to relax ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I found myself in situations that made me so anxious i was most relieved when they ended ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt that I had nothing to look forward to ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I found myself getting upset rather easily ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt that I was using a lot of nervous energy ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt sad and depressed ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I found myself getting impatient when I was delayed in any way (eg, elevators, traffic lights, being kept waiting) ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I had a feeling of faintness ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt that I had lost interest in just about everything ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: "I felt I wasn't worth much as a person ?",
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt that I was rather touchy ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I perspired noticeably (eg, hands sweaty) in the absence of high temperatures or physical exertion ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt scared without any good reason ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: "I felt that life wasn't worthwhile ?",
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },

    {
      question: 'I found it hard to wind down ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I had difficulty in swallowing ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        "I couldn't seem to get any enjoyment out of the things I did ?",
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat) ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt down-hearted and blue ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I found that I was very irritable ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt I was close to panic ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I found it hard to calm down after something upset me ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I feared that I would be "thrown" by some trivial but unfamiliar task ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I was unable to become enthusiastic about anything ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I found it difficult to tolerate interruptions to what I was doing ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I was in a state of nervous tension ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt I was pretty worthless ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I was intolerant of anything that kept me from getting on with what I was doing ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt terrified ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I could see nothing in the future to be hopeful about ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I felt that life was meaningless ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I found myself getting agitated ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question:
        'I was worried about situations in which I might panic and make a fool of myself ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I experienced trembling (eg, in the hands) ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
    {
      question: 'I found it difficult to work up the initiative to do things ?',
      options: ['0 - NEVER', '1 - SOMETIMES', '2 - OFTEN', '3 - ALMOST ALWAYS'],
      selected: '0 - NEVER',
    },
  ]);

  const [isAgreed, setIsAgreed] = useState(false);
  const disabled = questionsMap.some(question => !question.selected);

  return (
    <PaperProvider>
      <SafeAreaView style={{justifyContent: 'center', padding: 16}}>
        {!isAgreed ? (
          <View style={{marginBottom: 16}}>
            <Text style={{fontSize: 16}}>
              {`Please read each statement and circle a number 0, 1, 2 or 3 which indicates how much the statement applied to you over the past week. There are no right or wrong answers. Do not spend too much time on any statement. The rating scale is as follows: 

0 - Did not apply to me at all - NEVER 

1 - Applied to me to some degree, or some of the time - SOMETIMES 

2 - Applied to me to a considerable degree, or a good part of time - OFTEN 

3 - Applied to me very much, or most of the time - ALMOST ALWAYS`}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsAgreed(true);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                backgroundColor: 'blue',
                marginTop: 16,
                borderRadius: 8,
              }}>
              <Text style={{color: 'white', fontWeight: '800'}}>Agree</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ScrollView>
            {questionsMap.map((questionData, i) => {
              return (
                <View key={questionData.question}>
                  <Text style={{fontSize: 16, fontWeight: '700'}}>
                    {`${i + 1}. ${questionData.question}`}
                  </Text>
                  <RadioButton.Group
                    onValueChange={value => {
                      questionsMap[i] = {...questionData, selected: value};
                      setQuestionMap([...questionsMap]);
                    }}
                    value={questionData.selected}>
                    {questionData.options.map(option => {
                      return (
                        <RadioButton.Item
                          value={option}
                          label={option}
                          key={option}
                          position="leading"
                          labelStyle={{
                            textAlign: 'left',
                          }}
                        />
                      );
                    })}
                  </RadioButton.Group>
                </View>
              );
            })}
            <TouchableOpacity
              onPress={async () => {
                const payload = questionsMap.map((question, i) => {
                  return {[`Q${i + 1}A`]: mapQuestionValue[question.selected]};
                });
                console.log({payload});

                try {
                  const response = await axios.post(
                    'http://192.168.1.100:3000/get-score',
                    payload,
                  );
                  console.log({response});
                } catch (e) {
                  console.log({e});
                }
              }}
              // disabled={disabled}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                backgroundColor: disabled ? 'gray' : 'blue',
                marginTop: 16,
                borderRadius: 8,
              }}>
              <Text style={{color: 'white', fontWeight: '800'}}>Results</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
