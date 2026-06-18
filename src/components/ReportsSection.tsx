import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FileText, Presentation, Search, Download, FileDown, BookOpen, Sparkles } from "lucide-react";

interface ReportItem {
  id: number;
  title: string;
  filename: string;
  category: string;
  type: "document" | "presentation";
  format: "docx" | "pptx";
  size: string;
  description: string;
}

const reportsData: ReportItem[] = [
  {
    id: 1,
    title: "Awareness Pakistan Campaign Report",
    filename: "Awareness Pakistan Campaign Reports.docx",
    category: "Social Campaign",
    type: "document",
    format: "docx",
    size: "4.2 MB",
    description: "A comprehensive report detailing the nationwide awareness campaign, highlighting key demographics, outreach performance, and execution strategies."
  },
  {
    id: 2,
    title: "Kinetic Campaign Report",
    filename: "Kinetic Report.docx",
    category: "Market Research",
    type: "document",
    format: "docx",
    size: "20 KB",
    description: "Strategic research report analyzing campaign dynamics, audience targeting metrics, and market positioning guidelines."
  },
  {
    id: 3,
    title: "Revival 3D & 3D Cart Campaign Report",
    filename: "revival 3D and 3Dcart report.docx",
    category: "E-Commerce Strategy",
    type: "document",
    format: "docx",
    size: "5.7 MB",
    description: "Detailed evaluation of 3D asset implementation, design workflow, and conversion metrics on the 3D Cart e-commerce platform."
  },
  {
    id: 4,
    title: "Revival 3D & 3D Cart Pitch Deck",
    filename: "REVIVAL 3D &3D CART.pptx_20250121_122959_0000.pptx",
    category: "Pitch Deck & Presentation",
    type: "presentation",
    format: "pptx",
    size: "11.5 MB",
    description: "Visual presentation deck showcasing creative direction, 3D modeling concepts, and corporate pitches for the Revival campaign."
  },
  {
    id: 5,
    title: "Saar Bachao Sab Bachao Initiative",
    filename: "Saar Bachao Sab Bachao.pptx",
    category: "Social Advocacy",
    type: "presentation",
    format: "pptx",
    size: "4.9 MB",
    description: "Strategic proposal and advocacy presentation outlining environmental conservation campaigns, outreach channels, and community goals."
  }
];

const ReportsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "document" | "presentation">("all");

  const filteredReports = useMemo(() => {
    return reportsData.filter((report) => {
      const matchesTab = activeTab === "all" || report.type === activeTab;
      const matchesSearch =
        report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [searchQuery, activeTab]);

  const stats = useMemo(() => {
    const docCount = reportsData.filter((r) => r.type === "document").length;
    const pptCount = reportsData.filter((r) => r.type === "presentation").length;
    return {
      total: reportsData.length,
      documents: docCount,
      presentations: pptCount,
    };
  }, []);

  return (
    <section id="reports" className="section-padding bg-secondary/10 border-t border-b border-border/50" ref={ref}>
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 mb-4">
            <BookOpen size={16} className="text-coral" />
            <span className="text-xs font-heading tracking-[0.22em] uppercase text-muted-foreground">
              Resources & Analytics
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Campaign Reports & Decks
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
            Deep dive into campaign structures, strategic designs, and pitch presentations highlighting research and delivery.
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10"
        >
          {/* Tabs */}
          <div className="flex gap-2 p-1 bg-secondary/30 rounded-full border border-border/50 w-full md:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-foreground text-primary-foreground shadow-sm"
                  : "text-foreground/75 hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              All Files ({stats.total})
            </button>
            <button
              onClick={() => setActiveTab("document")}
              className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === "document"
                  ? "bg-foreground text-primary-foreground shadow-sm"
                  : "text-foreground/75 hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              Reports ({stats.documents})
            </button>
            <button
              onClick={() => setActiveTab("presentation")}
              className={`flex-1 md:flex-none px-5 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                activeTab === "presentation"
                  ? "bg-foreground text-primary-foreground shadow-sm"
                  : "text-foreground/75 hover:text-foreground hover:bg-secondary/40"
              }`}
            >
              Presentations ({stats.presentations})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search reports or decks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-coral/40 text-xs md:text-sm text-foreground placeholder-muted-foreground transition-all"
            />
          </div>
        </motion.div>

        {/* Reports Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredReports.map((report) => (
              <motion.div
                layout
                key={report.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-3xl border border-border p-6 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Visual Glow Effect on Card Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Category & Icon Row */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-secondary rounded-full text-[10px] font-heading font-medium tracking-wider uppercase text-foreground/80">
                      {report.category}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ${
                        report.type === "document"
                          ? "bg-blue-500/10 text-blue-600"
                          : "bg-orange-500/10 text-orange-600"
                      }`}
                    >
                      {report.type === "document" ? (
                        <FileText size={20} />
                      ) : (
                        <Presentation size={20} />
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base md:text-lg font-heading font-bold text-foreground mt-5 mb-2.5 group-hover:text-coral transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6">
                    {report.description}
                  </p>
                </div>

                {/* Footer Meta & Download */}
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    Format: <span className="uppercase font-semibold">{report.format}</span> ({report.size})
                  </span>
                  
                  <a
                    href={`/reports/${report.filename}`}
                    download={report.filename}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-coral transition-colors group/btn"
                  >
                    Download
                    <FileDown
                      size={14}
                      className="group-hover/btn:translate-y-0.5 transition-transform text-coral"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result State */}
        {filteredReports.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-sm">
              No reports or presentations found matching "{searchQuery}"
            </p>
          </motion.div>
        )}

        {/* Bottom Banner Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border border-border/80 bg-background/50 rounded-2xl p-4 flex flex-wrap justify-around items-center text-center gap-4"
        >
          <div>
            <p className="text-2xl font-bold font-heading text-foreground">{stats.total}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Artifacts</p>
          </div>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <div>
            <p className="text-2xl font-bold font-heading text-foreground">{stats.documents}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Strategy Reports</p>
          </div>
          <div className="h-6 w-px bg-border hidden sm:block" />
          <div>
            <p className="text-2xl font-bold font-heading text-foreground">{stats.presentations}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Slide Decks</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReportsSection;
