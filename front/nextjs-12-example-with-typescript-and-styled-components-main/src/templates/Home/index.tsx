`use cilent`
import { Heading } from 'components/Heading';

const rows = [
  { id: 1, qusetion: '전체 축구팀 목록을 팀이름 오름차순으로 출력하시오', answer: '' },
  { id: 41, qusetion: '수원팀에서 골키퍼(GK)의 이름을 모두 출력하시오. (ID 모를 경우)' },
  { id: 10, qusetion: '수원팀(K02) 과 대전팀(K10) 선수들 중 포지션이 골키퍼(GK) 인 선수를 출력하시오\n단 , 팀명, 선수명 오름차순 정렬하시오.', answer: '' },
  { id: 12, qusetion: '수원팀(K02) 과 대전팀(K10) 선수들 중\n키가 180 이상 183 이하인 선수들 키, 팀명, 사람명 오름차순', answer: '' },
  { id: 13, qusetion: '모든 선수들 중 포지션을 배정 받지 못한 선수들의 팀명과 선수이름 출력 둘다 오름차순', answer: '' },
  {
    id: 14, qusetion: '홈 팀과 스타디움, 스케줄을 조인하여2012년 3월 17일에 열린 각 경기의 홈 팀이름, 스타디움, 어웨이팀 이름 출력.\n' +
      '다중테이블 join 을 찾아서 해결하시오.', answer: ''
  },
  {
    id: 15, qusetion: '포항 스틸러스 소속 골키퍼(GK)선수, 포지션, 팀명 (연고지포함), 스타디움, 경기날짜를 구하시오.\n' +
      '연고지와 팀이름은 간격을 띄우시오(수원[] 삼성블루윙즈)', answer: ''
  },
  {
    id: 19, qusetion: '평균키가 인천 유나이티스팀(K04)의 평균키 보다 작은 팀의' +
      '팀ID, 팀명, 평균키 추출 = 인천 유나이티스팀의 평균키 (176.59)\n' +
      '키와 몸무게가 없는 칸은 0 값으로 처리한 후 평균값에 포함되지 않도록 하세요.', answer: ''
  },
  { id: 20, qusetion: '포지션이 MF 인 선수들의 소속팀명 및  선수명, 백넘버 출력', answer: '' },
  { id: 21, qusetion: '가장 키큰 선수 5명 소속팀명 및  선수명, 백넘버 출력, 단 키 값이 없으면 제외', answer: '' },
]

function Home() {

  return (<>
    <div>

      <Heading>Example</Heading>;
      {/* <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>문제</th>
            <th>답</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((i) => (
            <tr>
              <th>{i.id}</th>
              <th>{i.qusetion}</th>
              <th>{i.answer}</th>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
    <div className="grid grid-cols-2 gap-4">
    <div className="bg-blue-300 w-52 h-72 m-8 static rounded-lg ">
        <div className="bg-white w-52 h-72 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr className="m-4 rounded-2xl border-t-2"/>
            <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    <div className="bg-green-300 w-52 h-72 m-8 static rounded-lg ">
        <div className="bg-white w-52 h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr className="m-4 rounded-2xl border-t-2"/>
            <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    <div className="bg-red-300 w-52 h-72 m-8 static rounded-lg ">
        <div className="bg-white w-52 h-72 hover:m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr className="m-4 rounded-2xl border-t-2"/>
            <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>
    <div className="bg-yellow-300 w-52 h-72 m-8 static rounded-lg ">
        <div className="bg-white w-52 h-72 m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
            <h1 className="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
            <hr className="m-4 rounded-2xl border-t-2"/>
            <p className="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
        </div>
    </div>

</div>
  </>
  )
}

export default Home;
