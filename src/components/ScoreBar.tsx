export default function ScoreBar({ score } : {score: number }){
    
    const maxScore = [1, 2, 3, 4, 5]

    return(
        <div className="flex gap-2">
            {maxScore.map(i => (
                <div className={`w-16 h-3 rounded-lg ${ i < score ? 'bg-[#544439]' : 'bg-[#E0E0E0]' }`}>
                </div>
            ))}
        </div>
    )
}