import React from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-gray-800 font-medium text-lg group-hover:text-blue-900 transition-colors">{skill}</span>
        <span className="text-blue-600 font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-400 h-3 rounded-full transition-all duration-700 ease-out group-hover:to-blue-500"
          style={{ width: `${level}%`, transform: 'translateX(-100%)', animation: 'slideRight 1s forwards' }}
        >
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-25"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;