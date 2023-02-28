export interface IExam {
    id: number,
    year: number,
    announcement: string,
    subject: "Inglés" | "Lengua castellana y literatura" | "Biología" | "Historia del arte" | "Historia de España" | "Química" | "Física" | "Matemáticas II" | "Geografía",
    exam: string
}