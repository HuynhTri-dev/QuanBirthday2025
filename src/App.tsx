import React, { useState, useEffect, useRef, useCallback } from "react";
import { Hero } from "./components/Hero";
import { TimelineContainer } from "./components/Timeline/TimelineContainer";
import { timelineData } from "./data/timelineData";
import { Volume2, VolumeX } from "lucide-react";
import birthdaySong from "./data/media/Thầy giáo ba chúc mừng sinh nhật.mp3";

export default function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  // Khởi tạo isPlaying là false ban đầu, và chỉ chuyển thành true
  // sau khi audio được play thành công (để phản ánh trạng thái thực tế).
  const [isPlaying, setIsPlaying] = useState(false);
  // Thêm state để kiểm tra xem đã cố gắng chạy nhạc lần đầu chưa.
  const [isAttemptedPlay, setIsAttemptedPlay] = useState(false);

  // Hàm chạy nhạc ban đầu (được gọi trong useEffect)
  const initialPlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || isAttemptedPlay) return;

    audio.volume = 0.4;
    audio
      .play()
      .then(() => {
        // Thành công: Đặt trạng thái isPlaying thành true
        setIsPlaying(true);
      })
      .catch((error) => {
        // Thất bại (có thể do Autoplay Policy)
        console.log("Autoplay blocked or failed:", error.name);
        // Giữ isPlaying là false
        setIsPlaying(false);
        // Có thể thêm logic thông báo cho người dùng
      })
      .finally(() => {
        setIsAttemptedPlay(true);
      });
  }, [isAttemptedPlay]);

  // Thử chạy nhạc ngay khi component được mount
  useEffect(() => {
    initialPlay();
  }, [initialPlay]);

  // Hàm xử lý việc chuyển đổi bật/tắt nhạc
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Nếu nhạc đang TẮT, cố gắng chạy nhạc. Hành động này được coi là tương tác người dùng,
    // nên sẽ vượt qua chính sách Autoplay Policy nếu nó đã bị chặn trước đó.
    if (!isPlaying) {
      // Khi người dùng bấm nút Play, chúng ta cố gắng chạy nhạc,
      // và sau đó cập nhật state nếu thành công.
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          // Đảm bảo âm lượng đã được đặt nếu người dùng tương tác lần đầu
          audio.volume = 0.4;
        })
        .catch((error) => {
          console.error("Manual play failed:", error);
        });
    } else {
      // Nếu nhạc đang CHẠY, tạm dừng.
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <audio ref={audioRef} loop playsInline src={birthdaySong} />
      {/* Bỏ thuộc tính autoPlay khỏi thẻ <audio> và điều khiển nó qua JavaScript.
        Tuy nhiên, để đảm bảo luồng khởi tạo, bạn có thể để lại `autoPlay` nếu muốn,
        nhưng việc sử dụng `audio.play()` trong `useEffect` vẫn là cách tốt hơn 
        để kiểm soát logic. 
      */}

      <button
        onClick={toggleMusic}
        // Hiển thị nút Tắt nhạc nếu isPlaying là TRUE, ngược lại là Bật nhạc.
        className="fixed bottom-6 right-6 z-50 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-pink-200 hover:bg-pink-50 hover:scale-110 transition-all duration-300 group"
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? (
          <div className="relative">
            <Volume2 className="w-6 h-6 text-pink-600" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
            </span>
          </div>
        ) : (
          <VolumeX className="w-6 h-6 text-gray-400 group-hover:text-pink-500" />
        )}
      </button>

      {/* Có thể thêm một nút/thông báo "Nhấn để bật nhạc" nếu isAttemptedPlay là true nhưng isPlaying là false (vì bị chặn) */}

      <Hero />

      <TimelineContainer events={timelineData} />

      <footer className="bg-gradient-to-b from-white to-pink-50 py-16 text-center">
        <div className="container mx-auto px-6">
          <p className="text-pink-700 mb-2">
            ✨ Chúc mừng sinh nhật Tú Quân! ✨
          </p>
          <p className="text-sm text-gray-600">Made with 💖 — 22/11/2024</p>
        </div>
      </footer>
    </div>
  );
}
