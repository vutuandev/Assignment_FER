# AI Audit Log - FER202 Assignment

## 1. Thông tin chung

| Thông tin | Nội dung |
|---|---|
| Môn học | Front-End Web Development với ReactJS |
| Mã môn học | FER202 |
| Lớp | SE18B02 |
| Học kỳ | SU26 |
| Tên bài tập / Project | Custom React Web Application - Premium Laptop Store (Quản lý sản phẩm Laptop) |
| Tên sinh viên / Nhóm | Bài tập nhóm |
| MSSV / Danh sách MSSV | 1. Nguyễn Hữu Vũ Tuấn<br>2. Nguyễn Văn Tuấn<br>3. Nguyễn Đình Bảo<br>4. Nguyễn Thành Trung |
| Giảng viên hướng dẫn | Bộ môn Khung Front-End |
| Ngày bắt đầu | 01/07/2026 |
| Ngày hoàn thành | 13/07/2026 |

---

## 2. Công cụ AI đã sử dụng

Đánh dấu các công cụ AI đã sử dụng trong quá trình thực hiện bài tập/project.

- [x] ChatGPT
- [x] Gemini
- [x] Claude
- [x] GitHub Copilot
- [x] Cursor
- [x] Antigravity
- [ ] Microsoft Copilot
- [ ] Công cụ khác: ....................................

---

## 3. Mục tiêu sử dụng AI

Mô tả ngắn gọn sinh viên/nhóm đã sử dụng AI để hỗ trợ những công việc nào.

- Phân tích yêu cầu bài tập và lập kế hoạch đáp ứng 8 Chuẩn đầu ra (LO1 - LO8).
- Gợi ý kiến trúc dự án ReactJS kết hợp Redux Toolkit và React Router DOM v7.
- Thiết kế dữ liệu mẫu JSON Server (`db.json`) đóng vai trò REST API backend.
- Hỗ trợ thiết kế giao diện hiện đại theo phong cách Glassmorphism kết hợp React-Bootstrap.
- Viết mã nguồn Async Thunks cho Redux Toolkit (`fetchProducts`, `updateProduct`, `deleteProduct`, `addProduct`).
- Hỗ trợ xây dựng Class Component (`About.jsx`) quản lý state nội bộ và lifecycle (LO2).
- Hỗ trợ triển khai Lazy Loading và Code Splitting bằng `React.lazy` và `Suspense` (LO7).
- Debug lỗi re-render Redux Store và xung đột CSS giữa Bootstrap với Custom Glassmorphic styles.

---

## 4. Nhật ký sử dụng AI chi tiết

### Lần sử dụng AI số 1

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 02/07/2026 |
| Công cụ AI | Antigravity / ChatGPT |
| Mục đích sử dụng | Khởi tạo dự án Vite + React, thiết lập Git repository và xây dựng giao diện Header/Navbar kết hợp React-Bootstrap với Glassmorphism CSS |
| Phần việc liên quan | LO1 (Git & Setup), LO4 (Styling & Bootstrap) |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Tôi đang làm Assignment môn FER202 với chủ đề Quản lý sản phẩm Laptop (Premium Laptop Store). 
Hãy hướng dẫn setup dự án bằng Vite React, cài đặt bootstrap và react-bootstrap. 
Đồng thời gợi ý code CSS Glassmorphism kết hợp với Navbar của React-Bootstrap để tạo giao diện sang trọng, hiện đại.
```

#### 4.2. Kết quả AI gợi ý

- Cấu trúc lệnh khởi tạo Vite React (`npm create vite@latest`).
- Mã nguồn `src/index.css` định nghĩa variables CSS, backdrop-filter blur, hiệu ứng shadow và gradient dark/light glassmorphism.
- Component `Navbar.jsx` dùng `<Navbar>` và `<Nav>` từ `react-bootstrap` kết hợp custom class styling.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Bộ CSS Glassmorphism (backdrop-filter, rgba background, border hiệu ứng phát sáng nhẹ).
- Cấu trúc khung `Navbar.jsx` của React-Bootstrap.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Tự căn chỉnh lại font typography dùng Outfit / Inter và điều chỉnh khoảng cách padding/margin phù hợp với chuẩn UI Laptop Store.
- Khởi tạo Git repository và tạo commit đầu tiên đúng chuẩn yêu cầu môn học.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `80f9374` |
| File liên quan | `src/App.css`, `src/index.css`, `src/components/Navbar.jsx` |
| Screenshot | Đã kiểm tra UI Navbar Glassmorphism hoạt động mượt mà |
| Kết quả chạy/test | Đạt yêu cầu giao diện LO1, LO4 |
| Link video demo | Không có |
| Ghi chú khác | Khởi tạo cấu trúc giao diện |

#### 4.6. Nhận xét cá nhân/nhóm

- AI gợi ý CSS Glassmorphism rất đẹp mắt và giúp tiết kiệm đáng kể thời gian viết styling từ đầu.
- Cần tự điều chỉnh màu sắc để đảm bảo độ tương phản (contrast ratio) đạt chuẩn UX.

---

### Lần sử dụng AI số 2

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 03/07/2026 |
| Công cụ AI | ChatGPT / Cursor |
| Mục đích sử dụng | Thiết lập Redux Toolkit Store (`productSlice.js`, `store.js`) quản lý trạng thái sản phẩm toàn cục và hiển thị Tổng số lượng sản phẩm trên Navbar |
| Phần việc liên quan | LO8 (Redux Global State Management) |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Hãy hướng dẫn thiết lập Redux Store trong ứng dụng React bằng Redux Toolkit (@reduxjs/toolkit và react-redux). 
Tạo một productSlice chứa danh sách items sản phẩm, status, error. 
Sau đó kết nối Redux Store với Navbar để hiển thị badge "Total Products: X" đếm số lượng sản phẩm có trong store.
```

#### 4.2. Kết quả AI gợi ý

- Mã nguồn `store.js` sử dụng `configureStore`.
- Mã nguồn `productSlice.js` với `createSlice` và initial state.
- Hướng dẫn dùng `useSelector` trong `Navbar.jsx` để đọc `state.products.items.length`.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Cấu trúc khởi tạo Redux Store và Provider bọc xung quanh ứng dụng ở `main.jsx`.
- Selector lấy độ dài mảng sản phẩm hiển thị trên Badge Navbar.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Tự tổ chức thư mục `src/redux/` tách biệt rõ ràng giữa `store.js` và `productSlice.js`.
- Bổ sung kiểm tra null-safety khi mảng products chưa tải xong để tránh bị crash `undefined.length`.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `1e4ad41` |
| File liên quan | `src/redux/productSlice.js`, `src/redux/store.js`, `src/components/Navbar.jsx` |
| Screenshot | Badge số lượng sản phẩm trên Navbar cập nhật theo thời gian thực |
| Kết quả chạy/test | Redux Toolkit kết nối thành công, đạt chuẩn LO8 |
| Link video demo | Không có |
| Ghi chú khác | Hoàn thành cấu hình Redux Global State |

#### 4.6. Nhận xét cá nhân/nhóm

- Redux Toolkit đơn giản hóa rất nhiều so với Redux thuần truyền thống.
- Cần chú ý bọc `<Provider store={store}>` ở cấp cao nhất (`main.jsx`).

---

### Lần sử dụng AI số 3

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 05/07/2026 |
| Công cụ AI | Claude / Antigravity |
| Mục đích sử dụng | Xây dựng REST API Server với `json-server` (db.json) và tích hợp các Async Thunks (`fetchProducts`, `updateProduct`, `addProduct`, `deleteProduct`) với Axios |
| Phần việc liên quan | LO7 (Asynchronous Data Fetching & REST API) |
| Mức độ sử dụng | Hỗ trợ nhiều / Sinh chính code Thunks |

#### 4.1. Prompt đã sử dụng

```text
Hãy viết file db.json chứa dữ liệu mẫu danh sách 6-8 sản phẩm Laptop cao cấp (ID, name, brand, price, specs, image, description). 
Sau đó sử dụng createAsyncThunk của Redux Toolkit kết hợp với axios để viết các hàm fetchProducts, updateProduct, deleteProduct gọi đến JSON Server endpoint http://localhost:3001/products. 
Xử lý đầy đủ extraReducers với builder.addCase.
```

#### 4.2. Kết quả AI gợi ý

- Tệp `db.json` chứa cấu trúc JSON mảng các đối tượng Laptop (MacBook Pro, Dell XPS, Asus ROG, Lenovo ThinkPad, HP Spectre...).
- Các hàm `createAsyncThunk` tương ứng với các HTTP Methods GET, POST, PUT, DELETE.
- Khối `extraReducers` xử lý 3 trạng thái: `pending`, `fulfilled`, `rejected`.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Dữ liệu sản phẩm mẫu trong `db.json`.
- Cú pháp chuẩn của `createAsyncThunk` kết hợp Axios REST Client.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Tự thêm script `"server": "json-server --watch db.json --port 3001"` vào `package.json` để chạy REST API độc lập.
- Sửa lại đường dẫn ảnh sản phẩm hướng tới các link ảnh laptop chất lượng cao đáng tin cậy.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `1e4ad41` |
| File liên quan | `db.json`, `package.json`, `src/redux/productSlice.js` |
| Screenshot | REST API trả dữ liệu thành công trên `http://localhost:3001/products` |
| Kết quả chạy/test | Chạy `npm run server` lấy dữ liệu mượt mà |
| Link video demo | Không có |
| Ghi chú khác | Hoàn thành tích hợp Asynchronous API LO7 |

#### 4.6. Nhận xét cá nhân/nhóm

- Việc kết hợp JSON Server và Axios giúp việc mô phỏng REST API backend chân thực và nhanh chóng.
- Xử lý trạng thái `loading` và `failed` giúp ứng dụng có trải nghiệm phản hồi người dùng tốt hơn.

---

### Lần sử dụng AI số 4

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 06/07/2026 |
| Công cụ AI | Gemini / Antigravity |
| Mục đích sử dụng | Viết trang thông tin ứng dụng (`About.jsx`) dưới dạng React Class Component để quản lý state và hiển thị dữ liệu động theo yêu cầu chuẩn môn học |
| Phần việc liên quan | LO2 (Class Components & Dynamic State Data) |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Theo yêu cầu LO2 của môn học FER202, ứng dụng phải có ít nhất 1 component dạng React Class Component hiển thị dữ liệu động từ state. 
Hãy viết component About.jsx bằng Class Component kế thừa React.Component, chứa constructor khởi tạo state developerInfo và render giao diện thẻ Card Glassmorphism hiển thị các thông tin bài tập.
```

#### 4.2. Kết quả AI gợi ý

- Mã nguồn Class Component `About` với `constructor(props)`, `this.state` chứa `developerInfo` (name, course, assignment, role).
- Phương thức `render()` trả về JSX sử dụng React-Bootstrap `<Container>` và `<Card>`.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Cấu trúc cú pháp Class Component chuẩn bao gồm `constructor`, `this.state` và `render()`.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Trang trí thẻ Card bằng hiệu ứng CSS Glassmorphism (`backdropFilter: 'blur(16px)'`, `borderRadius: '20px'`).
- Tự bổ sung phần hiển thị danh sách các công nghệ sử dụng trong bài tập (React, Redux Toolkit, React-Bootstrap, JSON Server).

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `b9bf9de` |
| File liên quan | `src/components/About.jsx` |
| Screenshot | Đã kiểm tra UI trang About hiển thị chính xác dữ liệu từ state |
| Kết quả chạy/test | Đạt chuẩn LO2 (Class Component) |
| Link video demo | Không có |
| Ghi chú khác | Đáp ứng đúng tiêu chí kỹ thuật bắt buộc môn học |

#### 4.6. Nhận xét cá nhân/nhóm

- Mặc dù Functional Component phổ biến hơn hiện nay, Class Component vẫn là nền tảng quan trọng trong React để hiểu về Lifecycle và `this.state`.

---

### Lần sử dụng AI số 5

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 08/07/2026 |
| Công cụ AI | ChatGPT / Copilot |
| Mục đích sử dụng | Xây dựng giao diện Product List Grid (`ProductList.jsx`) hiển thị danh sách Laptop dạng thẻ Card, có thanh tìm kiếm (Search) và bộ lọc thương hiệu (Filter) |
| Phần việc liên quan | LO3 (JSX & ES6), LO4 (Styling & Bootstrap), LO6 (State & Events) |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Hãy viết component ProductList.jsx sử dụng Functional Component, React Hooks (useEffect, useState, useDispatch, useSelector). 
Component này dispatch action fetchProducts khi mount, hiển thị danh sách các laptop dạng Grid Responsive (3 cột desktop, 1 cột mobile). 
Có tính năng gõ từ khóa tìm kiếm theo tên và lọc theo hãng (Apple, Dell, Asus...). 
Mỗi sản phẩm hiển thị ảnh, tên, giá, hãng, và 3 nút action: Xem chi tiết, Sửa, Xóa.
```

#### 4.2. Kết quả AI gợi ý

- Mã nguồn `ProductList.jsx` với các state `searchTerm` và `selectedBrand`.
- Hàm lọc dữ liệu ES6 `products.filter(...)` kết hợp `.includes()` và `.toLowerCase()`.
- Giao diện Grid Bootstrap dùng `Row`, `Col`, `Card`, `Form.Control`, `Form.Select`.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Thuật toán filter mảng sản phẩm đa tiêu chí (search text + select category).
- Khung bố cục Grid Layout của React-Bootstrap.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Tích hợp thêm dialog xác nhận trước khi dispatch `deleteProduct(id)`.
- Thiết kế các badge thương hiệu với màu sắc phân biệt sinh động (Apple màu tối, Dell màu xanh dương, Asus màu đỏ...).

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `80f9374` |
| File liên quan | `src/components/ProductList.jsx` |
| Screenshot | Danh sách sản phẩm render dạng Grid Glassmorphism ấn tượng |
| Kết quả chạy/test | Tìm kiếm và lọc thương hiệu phản hồi tức thì |
| Link video demo | Không có |
| Ghi chú khác | Màn hình chính của chức năng quản lý |

#### 4.6. Nhận xét cá nhân/nhóm

- Việc kết hợp React-Bootstrap Grid với Custom CSS giúp giao diện vừa responsive vừa duy trì được vẻ hiện đại, độc đáo.

---

### Lần sử dụng AI số 6

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 09/07/2026 |
| Công cụ AI | Antigravity / Cursor |
| Mục đích sử dụng | Cấu hình React Router DOM (v7) với 3 đường dẫn chính và tối ưu hiệu năng bằng Lazy Loading (`React.lazy` và `Suspense`) cho trang Feature |
| Phần việc liên quan | LO5 (Routing), LO7 (Lazy Loading & Code Splitting) |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Hãy viết App.jsx cấu hình React Router với 3 route chính: Trang chủ (/), Danh sách sản phẩm (/feature), và Trang giới thiệu (/about). 
Áp dụng yêu cầu LO7: Import các component ProductList, ProductDetail, EditProduct bằng React.lazy() và bọc các Route bằng <Suspense> có chứa Spinner loading đẹp mắt.
```

#### 4.2. Kết quả AI gợi ý

- Mã nguồn `App.jsx` dùng `BrowserRouter`, `Routes`, `Route`.
- Cú pháp `const ProductList = React.lazy(() => import('./components/ProductList'))`.
- Thành phần `<Suspense fallback={<LoadingSpinner />}>` bọc ngoài `<Routes>`.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Cấu trúc khai báo Route và cách tích hợp `React.lazy`.
- Spinner fallback hiển thị trong lúc các chunk module được tải về.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Bổ sung thêm các dynamic route `/product/:id` và `/product/edit/:id` để hỗ trợ luồng xem chi tiết và chỉnh sửa.
- Tự thiết kế UI của màn hình Loading Spinner theo đúng theme Glassmorphism của ứng dụng.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `76b8a55` |
| File liên quan | `src/App.jsx` |
| Screenshot | Chuyển đổi giữa các trang mượt mà không load lại trang web |
| Kết quả chạy/test | Đã kiểm tra tab Network thấy JS bundle được tách thành các file nhỏ (code splitting) |
| Link video demo | Không có |
| Ghi chú khác | Hoàn thành LO5 và LO7 |

#### 4.6. Nhận xét cá nhân/nhóm

- `React.lazy` và `Suspense` giúp giảm kích thước tập tin bundle ban đầu, nâng cao đáng kể tốc độ tải trang ứng dụng Web.

---

### Lần sử dụng AI số 7

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 10/07/2026 |
| Công cụ AI | Claude / ChatGPT |
| Mục đích sử dụng | Xây dựng trang chỉnh sửa sản phẩm (`EditProduct.jsx`) hỗ trợ tải thông tin sản phẩm hiện tại, cập nhật qua Form và dispatch Redux Async Thunk `updateProduct` |
| Phần việc liên quan | LO6 (Controlled Forms & State), LO7 (API PUT Request), LO8 (Redux Dispatch) |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Hãy viết component EditProduct.jsx cho ứng dụng React. 
Sử dụng useParams() để lấy ID sản phẩm từ URL, lấy dữ liệu từ Redux Store hoặc gọi API để điền thông tin vào Controlled Form (name, brand, price, image, description, specs). 
Khi người dùng ấn Submit Form, kiểm tra validation (không để trống, giá phải là số dương) và dispatch updateProduct thunk, sau đó chuyển hướng về trang /feature bằng useNavigate().
```

#### 4.2. Kết quả AI gợi ý

- Mã nguồn `EditProduct.jsx` sử dụng `useState` để lưu thông tin form.
- Logic đồng bộ state form từ Redux item khi component mount.
- Hàm `handleSubmit` ngăn default event, validate input và dispatch action `updateProduct`.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Logic khởi tạo state của Form từ dữ liệu sản phẩm đã có.
- Cấu trúc validation form và điều hướng bằng `useNavigate`.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Thêm ô nhập liệu chi tiết các thông số kỹ thuật (RAM, CPU, Storage, Display) theo định dạng chuỗi phân cách để cập nhật đối tượng specs linh hoạt.
- Thêm hiệu ứng feedback thông báo thành công trước khi điều hướng trang.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `76b8a55` |
| File liên quan | `src/components/EditProduct.jsx` |
| Screenshot | Form cập nhật thông tin sản phẩm hoạt động mượt mà |
| Kết quả chạy/test | Dữ liệu trên `db.json` được cập nhật chính xác sau khi nhấn Save |
| Link video demo | Không có |
| Ghi chú khác | Hoàn thành tính năng Update trong chu trình CRUD |

#### 4.6. Nhận xét cá nhân/nhóm

- Form validation cả client-side và server-side giúp ngăn ngừa việc ghi dữ liệu sai định dạng vào cơ sở dữ liệu.

---

### Lần sử dụng AI số 8

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 11/07/2026 |
| Công cụ AI | Gemini / Cursor |
| Mục đích sử dụng | Xây dựng trang hiển thị chi tiết sản phẩm (`ProductDetail.jsx`) cho phép xem cấu hình kỹ thuật chuyên sâu của Laptop |
| Phần việc liên quan | LO5 (Dynamic Route Params), LO6 (Conditional Rendering) |
| Mức độ sử dụng | Hỗ trợ một phần |

#### 4.1. Prompt đã sử dụng

```text
Hãy tạo component ProductDetail.jsx nhận ID từ URL param, tìm sản phẩm tương ứng trong Redux Store (hoặc gọi API nếu chưa có). 
Hiển thị layout 2 cột: Bên trái là hình ảnh Laptop sắc nét kèm badge giá tiền, bên phải là thông tin chi tiết (Thương hiệu, Mô tả, Bảng thông số RAM, CPU, SSD, Screen, Pin, Trọng lượng) và nút Back to List.
```

#### 4.2. Kết quả AI gợi ý

- Mã nguồn `ProductDetail.jsx` dùng `useParams` và `useSelector`.
- Conditional rendering: Hiển thị `<Spinner>` khi đang tải hoặc Alert "Product not found" nếu ID không tồn tại.
- Layout 2 cột Bootstrap `Row` - `Col`.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Cấu trúc layout 2 cột và conditional rendering xử lý trường hợp không tìm thấy sản phẩm.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Tự tạo bảng thông số kỹ thuật (Specifications Table) đẹp mắt bằng React-Bootstrap `Table` phủ hiệu ứng mờ nhám Glassmorphism.
- Bổ sung nút bấm "Edit Product" cho phép chuyển nhanh sang trang sửa sản phẩm.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `76b8a55` |
| File liên quan | `src/components/ProductDetail.jsx` |
| Screenshot | Màn hình chi tiết sản phẩm hiển thị sinh động |
| Kết quả chạy/test | Thao tác chuyển từ danh sách vào xem chi tiết hoạt động chính xác |
| Link video demo | Không có |
| Ghi chú khác | Nâng cao trải nghiệm người dùng |

#### 4.6. Nhận xét cá nhân/nhóm

- Việc tổ chức bố cục thông tin sản phẩm khoa học giúp người dùng dễ dàng so sánh cấu hình phần cứng laptop.

---

### Lần sử dụng AI số 9

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 12/07/2026 |
| Công cụ AI | Antigravity / ChatGPT |
| Mục đích sử dụng | Debug lỗi Redux Toolkit extraReducers không cập nhật mảng state sau khi thực hiện thao tác PUT request và sửa lỗi mất dữ liệu khi F5 trang Edit |
| Phần việc liên quan | Debug & State Optimization |
| Mức độ sử dụng | Hỗ trợ sinh chính giải pháp debug |

#### 4.1. Prompt đã sử dụng

```text
Tôi gặp vấn đề: Khi chỉnh sửa sản phẩm ở EditProduct.jsx và dispatch updateProduct, dữ liệu trên server db.json thay đổi nhưng mảng items trong Redux Store không tự cập nhật lại giao diện ProductList. 
Ngoài ra khi F5 trực tiếp ở trang /product/edit/:id thì state Redux bị trống làm form bị trắng. Hãy chỉ ra nguyên nhân và cách khắc phục.
```

#### 4.2. Kết quả AI gợi ý

- Giải thích nguyên nhân: `updateProduct.fulfilled` trong `extraReducers` chưa tìm và thay thế đúng phần tử theo `id` trong mảng `state.items`.
- Cách sửa ở Redux Slice:
  ```javascript
  .addCase(updateProduct.fulfilled, (state, action) => {
    const index = state.items.findIndex(item => item.id === action.payload.id);
    if (index !== -1) {
      state.items[index] = action.payload;
    }
  })
  ```
- Cách sửa ở `EditProduct.jsx`: Nếu `state.items` rỗng (do F5 refresh), dispatch thêm `fetchProducts()` trong `useEffect` để tải dữ liệu bổ sung.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Đoạn mã cập nhật mảng immutably trong Redux Slice theo `findIndex`.
- Logic fallback tự động fetch lại sản phẩm khi người dùng F5 trang chỉnh sửa.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Tự kiểm tra lại toàn bộ các cases trong `extraReducers` (`addProduct`, `deleteProduct`, `fetchProducts`) để đảm bảo không bị sót lỗi tương tự.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `76b8a55` |
| File liên quan | `src/redux/productSlice.js`, `src/components/EditProduct.jsx` |
| Screenshot | Giao diện tự động cập nhật ngay lập tức sau khi sửa sản phẩm |
| Kết quả chạy/test | Đã thử nghiệm F5 trực tiếp trên trang Edit, form vẫn tải đủ dữ liệu |
| Link video demo | Không có |
| Ghi chú khác | Đã giải quyết triệt để lỗi đồng bộ state |

#### 4.6. Nhận xét cá nhân/nhóm

- AI giải thích nguyên nhân nguyên lý Redux Immutability rất rõ ràng và dễ hiểu.
- Việc xử lý các trường hợp Edge Case như F5 refresh trang rất quan trọng trong các Single Page Applications (SPA).

---

### Lần sử dụng AI số 10

| Nội dung | Thông tin |
|---|---|
| Ngày sử dụng | 13/07/2026 |
| Công cụ AI | Antigravity / Cursor |
| Mục đích sử dụng | Kiểm thử toàn diện ứng dụng (Manual Testing), rà soát mã nguồn bằng Oxlint linter và hoàn thiện tài liệu hướng dẫn `README.md` |
| Phần việc liên quan | LO1 (Documentation & Quality Audit) |
| Mức độ sử dụng | Hỗ trợ nhiều |

#### 4.1. Prompt đã sử dụng

```text
Hãy giúp tôi kiểm tra tính tuân thủ của project đối với 8 chuẩn đầu ra LO1-LO8 của môn FER202. 
Đồng thời hỗ trợ viết tệp README.md chuyên nghiệp trình bày đầy đủ: Tên ứng dụng, Hướng dẫn cài đặt và khởi chạy (json-server + vite), Bảng đối chiếu các LOs với mã nguồn tương ứng, và Minh chứng đóng góp.
```

#### 4.2. Kết quả AI gợi ý

- Mẫu tài liệu `README.md` chuẩn Markdown với các phần: App Concept, Run Instructions, Learning Outcomes Fulfillment (LO1-LO8 Mapping), và Team Contributions.
- Cấu hình Oxlint (`.oxlintrc.json`) để quét lỗi cú pháp JavaScript/React.

#### 4.3. Phần sinh viên/nhóm đã sử dụng từ AI

- Cấu trúc trình bày tài liệu README.md khoa học, rõ ràng.
- Danh sách các câu lệnh kiểm thử code.

#### 4.4. Phần sinh viên/nhóm tự chỉnh sửa hoặc cải tiến

- Tự thực hiện chạy kiểm thử thực tế toàn bộ ứng dụng, chụp ảnh minh chứng và kiểm tra số lượng commit trên Git history (đảm bảo >= 5 commits theo chuẩn LO1).
- Hoàn thiện tài liệu và đóng gói dự án.

#### 4.5. Minh chứng

| Loại minh chứng | Nội dung |
|---|---|
| Link commit | Commit `9928b47` |
| File liên quan | `README.md`, `.oxlintrc.json` |
| Screenshot | README hiển thị đầy đủ và chuyên nghiệp trên GitHub Repository |
| Kết quả chạy/test | Oxlint quét code không có lỗi (0 errors) |
| Link video demo | Không có |
| Ghi chú khác | Hoàn thành toàn bộ dự án Assignment FER202 |

#### 4.6. Nhận xét cá nhân/nhóm

- Việc tổng hợp tệp README chi tiết giúp giảng viên đánh giá chính xác mức độ hoàn thành bài tập và tính minh bạch trong việc tự học.

---

## 5. Bảng tổng hợp mức độ sử dụng AI

Đánh dấu mức độ AI hỗ trợ ở từng hạng mục trong bài tập FER202.

| Hạng mục | Không dùng AI | AI hỗ trợ ít | AI hỗ trợ nhiều | AI sinh chính | Ghi chú |
|---|:---:|:---:|:---:|:---:|---|
| Phân tích yêu cầu bài tập (LO1-LO8) | | ✔ | | | Tự đối chiếu yêu cầu môn học |
| Thiết kế dữ liệu REST API (db.json) | | | ✔ | | AI gợi ý mảng dữ liệu sản phẩm Laptop mẫu |
| Thiết kế kiến trúc React App | | | ✔ | | Tổ chức thư mục components & redux |
| Thiết kế giao diện Glassmorphism | | | ✔ | | AI gợi ý CSS backdrop-filter & layout |
| Code Class Component (LO2) | | | ✔ | | Class Component `About.jsx` |
| Code Redux Store & Slice (LO8) | | | ✔ | | `productSlice.js` & `store.js` |
| Code Async Thunk REST API (LO7) | | | | ✔ | API axios GET/POST/PUT/DELETE |
| Code React Router & Lazy Loading (LO5, LO7) | | | ✔ | | `React.lazy`, `Suspense`, Router v7 |
| Debug lỗi State & Component | | | | ✔ | Fix lỗi F5 refresh & Redux update |
| Kiểm thử sản phẩm | ✔ | | | | Chạy thử thủ công 100% |
| Viết báo cáo & README.md | | | ✔ | | Viết tài liệu README & Audit Log |

---

## 6. Các lỗi hoặc hạn chế từ AI

Ghi lại các trường hợp AI trả lời sai, thiếu, chưa phù hợp hoặc sinh code không tương thích.

| STT | Lỗi/hạn chế từ AI | Cách phát hiện | Cách xử lý/cải tiến |
|---:|---|---|---|
| 1 | AI sinh code `extraReducers` theo cú pháp cũ dạng Object `{ [fetchProducts.fulfilled]: ... }` bị cảnh báo deprecated trong Redux Toolkit mới | Khi khởi chạy ứng dụng, Console trình duyệt xuất hiện cảnh báo "builder callback notation is required". | Đổi toàn bộ sang cú pháp chuẩn `(builder) => { builder.addCase(...) }`. |
| 2 | AI gợi ý dùng `fetch()` thủ công trong component thay vì dùng `createAsyncThunk` của Redux Toolkit | Code bị phân tán logic xử lý API ra các component thay vì tập trung tại Redux Slice theo chuẩn LO8. | Viết lại các hàm API bằng `createAsyncThunk` trong `productSlice.js`. |
| 3 | AI quên bọc `<Suspense>` xung quanh `<Routes>` khi dùng `React.lazy` | Khi chuyển hướng trang lần đầu tiên, ứng dụng bị crash với lỗi runtime "A component suspended while rendering...". | Bọc `<Suspense fallback={<LoadingSpinner />}>` bên ngoài `<Routes>` trong `App.jsx`. |

---

## 7. Kiểm chứng kết quả AI

Mô tả cách sinh viên kiểm tra lại kết quả do AI gợi ý.

- **Chạy thử chương trình (Manual Testing):**
  - Khởi chạy REST API backend bằng câu lệnh `npm run server` (JSON Server chạy tại cổng 3001).
  - Khởi chạy frontend React bằng câu lệnh `npm run dev` (Vite dev server).
  - Thực hiện trực tiếp các thao tác trên UI: Xem danh sách laptop, tìm kiếm từ khóa, lọc theo thương hiệu, xem chi tiết sản phẩm, sửa giá/tên sản phẩm, và xóa sản phẩm.
- **Kiểm tra Redux State (Redux DevTools):**
  - Mở Redux DevTools tab trên Chrome F12 để theo dõi các action `fetchProducts/fulfilled`, `updateProduct/fulfilled` được dispatch và quan sát sự thay đổi của cây trạng thái Global State.
- **Kiểm tra Lazy Loading & Routing (Network Tab):**
  - Mở tab Network trên F12 Inspect, chọn Disable Cache và bấm chuyển hướng giữa Home, Feature và About để xác nhận các file chunk JS được tải lười (lazy loaded) đúng thời điểm.
- **Rà soát chất lượng code (Oxlint):**
  - Chạy `npm run lint` để kiểm tra các cảnh báo cú pháp JS/React.

---

## 8. Đóng góp cá nhân hoặc đóng góp nhóm

### 8.1. Phân công công việc và đóng góp của từng thành viên trong nhóm

Mô tả chi tiết phân công nhiệm vụ, phần các thành viên tự thực hiện, phần AI hỗ trợ và phần đã tự cải tiến trong nhóm:

| STT | Thành viên | Vai trò / Phần việc đảm nhiệm | Phần tự thực hiện | Phần AI hỗ trợ & Cải tiến |
|---:|---|---|---|---|
| 1 | **Nguyễn Hữu Vũ Tuấn** | Trưởng nhóm / Full-stack React & Architecture | - Khởi tạo cấu trúc dự án Vite + React, cấu hình Git repository.<br>- Thiết lập Redux Store (`store.js`, `productSlice.js`).<br>- Triển khai Asynchronous Data Fetching với REST API (Axios + JSON Server).<br>- Lập kế hoạch và kiểm thử toàn bộ hệ thống (Manual Test & Redux Inspection). | - Hỗ trợ cú pháp Redux Toolkit Async Thunks (`createAsyncThunk`).<br>- Debug lỗi đồng bộ Redux state và xử lý F5 refresh trang. |
| 2 | **Nguyễn Văn Tuấn** | Frontend Developer / Component & UI Design | - Xây dựng các UI component chính (`ProductList.jsx`, `ProductDetail.jsx`).<br>- Thiết kế giao diện Glassmorphism responsive kết hợp React-Bootstrap.<br>- Viết logic tìm kiếm (Search) và lọc theo thương hiệu (Filter) đa tiêu chí. | - Hỗ trợ gợi ý các CSS variables và hiệu ứng Glassmorphism (backdrop-filter blur).<br>- Hỗ trợ thiết kế layout Grid Bootstrap responsive. |
| 3 | **Nguyễn Đình Bảo** | Frontend Developer / State & Form Management | - Xây dựng component chỉnh sửa sản phẩm (`EditProduct.jsx`).<br>- Xử lý Controlled Forms và state binding dữ liệu sản phẩm.<br>- Xây dựng logic Form Validation client-side & server-side. | - Hỗ trợ logic đồng bộ Form State với Redux Store.<br>- Hỗ trợ cấu hình điều hướng `useNavigate` và thông báo feedback UI. |
| 4 | **Nguyễn Thành Trung** | Frontend Developer & QA / Documentation | - Xây dựng Class Component (`About.jsx`) đáp ứng chuẩn LO2.<br>- Cấu hình React Router v7 và tối ưu Lazy Loading & Code Splitting (`React.lazy` / `Suspense`).<br>- Quét lỗi chất lượng code (Oxlint) và tổng hợp tài liệu `README.md` & `AI_AUDIT_LOG`. | - Hỗ trợ cú pháp Class Component chuẩn và lifecycle state.<br>- Hỗ trợ cấu hình Spinner Loading fallback trong Suspense. |

---

## 9. Reflection cuối bài

### 9.1. AI đã hỗ trợ em ở điểm nào?

```text
AI hỗ trợ rất nhiều trong việc khởi tạo nhanh mã nguồn mẫu (boilerplate), viết các bộ lọc CSS Glassmorphism phức tạp và gợi ý cú pháp chuẩn của Redux Toolkit Async Thunks và React Router v7.
```

### 9.2. Phần nào em không sử dụng theo gợi ý của AI? Vì sao?

```text
Em không sử dụng gợi ý dùng fetch API trực tiếp trong Component của AI, vì việc này làm vi phạm nguyên tắc quản lý state tập trung (Global State Management - LO8). Toàn bộ luồng gọi API bắt buộc phải thông qua Redux Async Thunks.
```

### 9.3. Em đã kiểm tra tính đúng đắn của kết quả AI như thế nào?

```text
Em kiểm tra bằng cách chạy ứng dụng thực tế trên trình duyệt, kết hợp kiểm tra Redux DevTools để theo dõi state, mở tab Network để kiểm tra các HTTP request/response tới JSON Server, và dùng Oxlint để lint mã nguồn.
```

### 9.4. Nếu không có AI, phần nào sẽ khó khăn nhất?

```text
Phần khó khăn và tốn thời gian nhất nếu không có AI là việc thiết kế các hiệu ứng CSS Glassmorphism hiện đại và xử lý đồng bộ bất đồng bộ giữa Redux Store với REST API backend khi thực hiện các thao tác CRUD.
```

### 9.5. Sau bài tập/project này, em học được gì về môn học?

```text
Em làm chủ được tư duy phát triển ứng dụng ReactJS hiện đại: Biết cách tổ chức Component hợp lý, thành thạo việc quản lý state toàn cục bằng Redux Toolkit, hiểu rõ cơ chế Router & Lazy Loading để tối ưu hiệu năng, và vận dụng cả Class Component lẫn Functional Component linh hoạt.
```

### 9.6. Sau bài tập/project này, em học được gì về cách sử dụng AI có trách nhiệm?

```text
Sử dụng AI như một công cụ hỗ trợ tư duy và tăng tốc độ lập trình. Người lập trình phải hiểu rõ bản chất mã nguồn mà AI sinh ra, luôn tự kiểm thử thủ công và chủ động chỉnh sửa code để đáp ứng đúng yêu cầu kĩ thuật của môn học thay vì phụ thuộc hoàn toàn vào AI.
```

---

## 10. Cam kết học thuật

Sinh viên cam kết rằng:

- Nội dung AI hỗ trợ đã được ghi nhận trung thực và đầy đủ.
- Không nộp nguyên văn kết quả AI mà không qua kiểm tra và chỉnh sửa.
- Có khả năng giải thích chi tiết toàn bộ mã nguồn đã nộp.
- Chịu trách nhiệm hoàn toàn về tính đúng đắn của sản phẩm cuối cùng.
- Hiểu rằng việc sử dụng AI không khai báo có thể ảnh hưởng trực tiếp đến kết quả đánh giá môn học.

| Sinh viên xác nhận | Ngày xác nhận |
|---|---|
| Nguyễn Hữu Vũ Tuấn | 13/07/2026 |
| Nguyễn Văn Tuấn | 13/07/2026 |
| Nguyễn Đình Bảo | 13/07/2026 |
| Nguyễn Thành Trung | 13/07/2026 |
