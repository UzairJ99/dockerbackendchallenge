import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://34.134.162.188/pokemon/Pikachu');
  sleep(0.01);
}