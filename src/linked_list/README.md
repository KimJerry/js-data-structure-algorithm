# Linked List 자료구조 사용법!

https://github.com/trekhleb/javascript-algorithms 을 참고하였습니다.

개인적인 공부 목적으로 작성하고 있습니다.
Linked List의 개념에 대해선 설명하지 않고 메서드에 대해서만 설명합니다.
모든 메서드는 직접 구현했기 때문에 버그가 있을 수 있습니다.

### Linked List의 구조

LinkedListNode 라는 객체를 사용하고 있습니다.
이 객체에는 value, next 2개의 프로퍼티가 존재합니다.

실제 사용하게 되는 객체는 LinkedList 인데, head, tail 2개의 프로퍼티가 존재합니다.
head와 tail은 LinkedListNode 객체이고, 초기값은 null로 설정되어 있습니다.
head, tail 의 값이 null 이라면 List에 노드가 없다는 의미입니다. 이외는 노드가 존재합니다.
List를 순회할 때는 <code>curNode = curNode.next</code> 이런식으로 한칸한칸 옮겨주면서 순회하면 됩니다.

### 1. pushFront(value)

List의 맨 앞에 새로운 노드를 추가합니다.

### 2. pushBack(value)

List의 맨 뒤에 새로운 노드를 추가합니다.

### 3. insert(value, rawIndex)

List의 중간에 새로운 노드를 추가합니다.
<code>rawIndex</code> 번째 노드 뒤에 새로운 노드를 추가하는 메서드입니다.
<code>rawIndex = 1</code> 이면, 헤드의 바로 뒤에 삽입한다는 의미입니다.
<code>rawIndex = 0</code> 이면, List의 맨 앞에 노드를 삽입한다는 의미입니다.

### 4. delete(value)

List에서 <code>value</code> 라는 값을 가진 노드를 모두 제거하는 메서드입니다.
노드의 제거에 성공하면 제거한 노드를 반환합니다.
List에 노드가 존재하지 않을 경우 <code>null</code>을 반환하게 됩니다.

### 5. find(value)

List에서 <code>value</code>라는 값을 가진 노드를 반환하는 메서드입니다.
해당 노드가 없을 경우 <code>null</code>을 반환합니다.

### 6. popBack()

List 에서 tail에 위치한 노드를 제거하는 메서드입니다.
제거에 성공하면 tail에 위치했던 노드를 반환합니다.
제거에 실패하면 <code>null</code>을 반환합니다.

### 7. popFront()

List에서 head에 위치한 노드를 제거하는 메서드입니다.
제거에 성공하면 head에 위치했던 노드를 반환합니다.
제거에 실패하면 <code>null</code>을 반환합니다.
