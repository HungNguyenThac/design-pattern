export abstract class Strategy {
  abstract processFiles(arrayFiles: File[]): void;
}

/**
 * Strategy pattern nói chúng ta cần tạo cho mỗi thuật toán một class riêng gọi là strategy.
 * Phần code sử dụng thuật toán này sẽ thay thế phần hardwire code bằng reference tới strategy object.
 * Phần code đó sẽ không cần biết chi tiết về loại strategy mà nó sử dụng,
 * nó có thể sử dụng mọi strategy với phần interface mà strategy cung cấp
 *
 * strategy có thể thay thế hardwire theo thời gian thực
 *
 */
