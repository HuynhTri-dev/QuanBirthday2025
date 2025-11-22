// timelineData.ts
export type MediaItem = {
  type: "image" | "video";
  filename: string;
  caption?: string;
};

export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
  media?: MediaItem;
};

export const timelineData: TimelineEvent[] = [
  {
    id: "1",
    date: "Lớp 10",
    title: "Lần đầu gặp gỡ — Cùng một tổ! 🌱",
    description:
      "Định mệnh sắp đặt cho chúng ta ngồi cùng một tổ. Từ những ngày đầu còn ngại ngùng đến những buổi học chung đầy tiếng cười, đó là khởi đầu của một tình bạn đẹp.",
    media: {
      type: "image",
      filename: "1.jpg",
      caption: "Những ngày đầu ngồi cùng tổ",
    },
  },
  {
    id: "2",
    date: "Lớp 10",
    title: "Những giờ ra chơi ồn ào 🎮",
    description:
      "Những buổi ra chơi cùng nhau, chia sẻ đồ ăn vặt, tám chuyện không ngừng nghỉ. Dù chỉ 15 phút nhưng luôn tràn đầy năng lượng và tiếng cười rộn ràng!",
    media: {
      type: "image",
      filename: "2.jpg",
      caption: "Giờ ra chơi vui vẻ",
    },
  },
  {
    id: "3",
    date: "Lớp 10",
    title: "Làm bài tập nhóm lần đầu 📚",
    description:
      "Cùng nhau làm project, đôi khi nghiêm túc, đôi khi lại cười đùa. Những lúc deadline cận kề nhưng vẫn có thời gian để tám chuyện phiếm là kỷ niệm không thể quên!",
    media: {
      type: "image",
      filename: "3.jpg",
      caption: "Làm bài tập nhóm",
    },
  },
  {
    id: "4",
    date: "Cuối lớp 10",
    title: "Kỳ nghỉ hè đầu tiên 🌞",
    description:
      "Tuy xa nhau nhưng vẫn nhắn tin suốt ngày. Chia sẻ mọi chuyện từ những kế hoạch mùa hè đến những câu chuyện nhỏ nhặt hàng ngày. Tình bạn không khoảng cách!",
    media: {
      type: "image",
      filename: "4.jpg",
      caption: "Kỷ niệm mùa hè",
    },
  },
  {
    id: "5",
    date: "Lớp 11",
    title: "Xa nhau nhưng không quên nhau 💌",
    description:
      "Dù không còn ngồi gần nhau như trước, nhưng chúng ta vẫn luôn quan tâm, nhắn tin hỏi thăm. Những tin nhắn buổi sáng, những lời động viên khi kiểm tra khiến tình bạn thêm bền chặt.",
    media: {
      type: "image",
      filename: "5.jpg",
      caption: "Luôn nhớ về nhau",
    },
  },
  {
    id: "6",
    date: "Lớp 12",
    title: "Cùng nhau luyện thi ĐGNL 📝",
    description:
      "Những ngày ôn tập căng thẳng cho kỳ thi đánh giá năng lực. Cùng nhau giải đề, động viên nhau khi stress, và luôn tin rằng cả hai sẽ làm được!",
    media: {
      type: "image",
      filename: "6.jpg",
      caption: "Cùng nhau luyện thi",
    },
  },
  {
    id: "7",
    date: "Lớp 12",
    title: "Hành trình thi tốt nghiệp THPT 🎓",
    description:
      "Cột mốc quan trọng nhất của tuổi học trò. Cùng nhau trải qua những ngày thi căng thẳng, cùng ôn bài đến tận đêm khuya. Rồi cả hai đều thành công và sẵn sàng cho chặng đường mới!",
    media: {
      type: "image",
      filename: "7.jpg",
      caption: "Tốt nghiệp THPT",
    },
  },
  {
    id: "8",
    date: "Sau tốt nghiệp",
    title: "Kỷ niệm THPT đáng nhớ 🌈",
    description:
      "Nhìn lại 3 năm THPT, từ lớp 10 ngồi cùng tổ đến lớp 12 cùng thi tốt nghiệp. Mỗi khoảnh khắc đều là kỷ niệm đẹp. Cảm ơn Quân đã là người bạn tuyệt vời!",
    media: {
      type: "video",
      filename: "8.mp4",
      caption: "Video kỷ niệm THPT",
    },
  },
  {
    id: "9",
    date: "22/11/2025",
    title: "Chúc mừng sinh nhật tuổi 21! 🎉",
    description:
      "Happy Birthday Tú Quân! Chúc bạn tuổi 20 tràn đầy hạnh phúc, thành công và những điều tốt đẹp nhất. Cảm ơn vì những kỷ niệm tuyệt vời, mong rằng tình bạn của chúng ta sẽ mãi bền chặt! 💖",
    media: {
      type: "image",
      filename: "9.jpg",
      caption: "Chúc mừng sinh nhật! 🎉",
    },
  },
];
