function solution(num_list) {
  var answer = [0, 0];
  for (let i of num_list) {
    if (i % 2 == 0) {
      answer[0]++;
      continue;
    }
    answer[1]++;
  }
  return answer;
}
