import React from "react";

const teamMembers = [
  {
    name: "Sihyun, Lee",
    position: "Co-Chief Executive Officer",
    bio: "現) VIS Investment, Co-CEO\n" +
        "前) WorldQuant, Hedge Fund Freelancer\n" +
        "前) KoreaWide Partners, Private Equity Intern\n" +
        "前) Arthur D. Little, Strategy PJT RA\n" +
        "前) Mercer Korea, Cross-border M&A Team RA\n" +
        "前) PwC Consulting, Cross-border M&A PJT RA\n" +
        "前) MiraeAsset Securities, Global S&T Assistant",

    photo: "/images/team-sihyun.jpg",
  },
  {
    name: "Jaeyeong, Kim",
    position: "Co-Chief Executive Officer",
    bio: "現) VIS Investment, Co-CEO\n" +
          "前) WorldQuant, Hedge Fund Freelancer\n" +
          "前) GS Ventures, Venture Capital Intern\n" +
          "前) PwC Consulting, ML/DL PJT RA",
    photo: "/images/team-jaeyoung.jpg",
  },
  {
    name: "Youngseo, Yoon",
    position: "Research Assistant",
    bio: "現) VIS Investment, Investment Team RA",
    photo: "/images/team-youngseo.jpg",
  },
  {
    name: "Jiwon, Yang",
    position: " Backend & Frontend Developer",
    bio: "現) VIS Investment, Backend Developer\n" +
        "現) Wish, Backend Developer\n" +
        "前) UMC Travel Compass, Backend Developer\n" +
        "前) KAU Reborn, Backend Developer\n" +
        "前) KOPIS WhaShow, Backend Developer",
    photo: "/images/team-jiwon.jpg",
  },
];

function TeamIntroduce() {
  return (
    <section className="bg-white dark:bg-black py-10 px-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-10 mt-4">
      Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* 팀원 사진 */}
            <div className="rounded-full w-32 h-32 bg-white shadow-lg">
              <img
                src={member.photo}
                alt={member.name}
                className="rounded-full w-32 h-32 object-cover"
              />
            </div>
            {/* 팀원 정보 */}
            <h2 className="text-lg font-semibold text-black dark:text-white font-sans">
              {member.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-sans">
              {member.position}
            </p>
            <p
              className="text-sm text-gray-700 dark:text-gray-300 text-left"
              style={{ whiteSpace: "pre-line" }}
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamIntroduce;
