import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

// 모달의 스타일을 지정할 수 있습니다.
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 0,
    maxWidth: "80vw",
    maxHeight: "60vh",
  },
  overlay: {
    zIndex: 10, // 모달 배경에 적용될 z-index 값
  },
};

// 모달을 앱의 루트 엘리먼트에 바인딩합니다(선택적).
Modal.setAppElement("#root");

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  //margin-left: auto; // 오른쪽 정렬을 위해
  display: block;

  margin-right: 10px; // 모든 버튼에 오른쪽 마진 추가
  &:last-child {
    margin-right: 0; // 마지막 버튼의 오른쪽 마진 제거
  }
`;

function GuideModal() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const introduce = `
최적의 출발 시간과 교통 수단을 한 번에 찾아보세요!

저희 서비스는 개인의 대중교통 기회비용과 교통상황을 고려하여 최적의 출발 시간과 대중교통 루트를 제안합니다. 
시간대별 교통 상황과 개인별 선호도를 분석하여, 여러분께 가장 알맞은 출발 시간과 대중교통 옵션을 제공해드립니다.
    `;

  const howTo = `
1. 출근 가능한 시간범위 입력
 출발 가능한 시간 범위를 입력합니다.

2. 출도착지 설정법
 사용자는 지도의 검색창을 통해 도로명 주소로 검색하거나, 지도에서 마우스 우클릭을 통해 출발지 및 도착지를 직접 설정할 수 있습니다. 
  
(선택사항) 
3. 대중교통별 기회비용 입력
 ‘상세설정’ 버튼을 통해 대중교통 수단별로 기회비용을 설정할 수 있습니다.
 이 기능을 통해 사용자는 자신의 상황에 가장 적합한 출발 시간과 대중교통 루트를 보다 정확하게 제공받을 수 있습니다.
 기본 설정은 일반적인 대중교통 선호도와 소득 중위값을 사용하여 자동으로 계산됩니다.
    `;

  const example = `
1. 아침 시간에 특정 장소로 이동이 필요하신가요?
 오전 시간대(06:00~12:00)를 선택하고 출발지와 도착지를 설정하세요. 다양한 시간대 중 최적의 시간대를 분석하여 추천드립니다. 
 대중교통 선호도는 기본적으로 표준 설정으로 제공되며, 세부 설정을 통해 사용자 맞춤형으로 조정 가능합니다.

2. 자율 출퇴근제를 이용 중이신가요?
  출근 가능 시간대와 목적지를 입력하면, 최적의 출발 시간을 제안해드립니다. 
 이를 통해 교통 체증 없이 여유로운 출근길을 만들어드립니다.

3. 극한의 효율을 보고싶으신가요?
 상세 설정을 이용해 자신의 대중교통별 기회비용과 시급을 입력해보세요.
 대중교통별 기회비용은 한 시간 동안 해당 대중교통을 이용할 때 얼마의 돈을 지급받는다면 탑승할 지 최소 금액을 입력하시면 됩니다. 
 시간당 기회 비용의 경우 간단하게 본인의 시급을 입력하시거나, 
 정확한 계산을 위해선 자신의 한시간의 가치, 즉 한시간의 자유시간을 준다면 지불할 수 있는 최대금액을 입력해주시면 됩니다.
 
4. 외출후 귀가 시간에 차가 막힐까 걱정되시나요?
 귀가 가능 시간 범위를 입력해 최적의 시간을 선택하세요.

여러분의 다음 이동이 보다 효율적이고 신속하게 이루어질 수 있도록, 저희 서비스를 활용해 최적의 시간을 찾아보세요!
    `;

  return (
    <div>
      <Button onClick={openModal}>사용법</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="사용법 모달"
      >
        <h4>"몇시에 나갈까?"</h4>
        <h5>최적의 사용을 위해 PC환경 접속을 권장드립니다.</h5>
        <pre>{introduce}</pre>

        <h4>"어떻게 이용하나요?"</h4>
        <pre>{howTo}</pre>

        <h4>"이런 상황에 이용해보세요"</h4>
        <pre>{example}</pre>

        <p>
          상세설명:{" "}
          <a
            href="https://github.com/Juminn/When-to-go-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 페이지
          </a>
        </p>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
}

export default GuideModal;
